'use strict';

firebase.auth().onAuthStateChanged(user => {
    if (validateUserSession()) {
        console.log("Currently logged in as:", user.email);
    }

    const emailElement = document.querySelector(".user-email");
    emailElement.innerText = user.email;
});


function validateUserSession() {
    if (!firebase.auth().currentUser) {
        window.location = "login.html";
        return false;
    }

    return true;
}

const logOutButtonElement = document.querySelector('.log-out-button');

logOutButtonElement.addEventListener("click", event => {
    firebase.auth().signOut();
})

rootRef.on('child_changed', data => {
    const inProgressElement = document.querySelector('.user-statistic-value.in-progress');
    const completedElement = document.querySelector('.user-statistic-value.completed');

    rootRef.child(firebase.auth().currentUser.uid).once('value', snapshot => {
        inProgressElement.innerHTML = snapshot.val()['in_progress'];
        completedElement.innerText = snapshot.val()['completed'];
    });
});

rootRef.on('child_added', data => {
    const inProgressElement = document.querySelector('.user-statistic-value.in-progress');
    const completedElement = document.querySelector('.user-statistic-value.completed');

    rootRef.child(firebase.auth().currentUser.uid).once('value', snapshot => {
        inProgressElement.innerHTML = snapshot.val()['in_progress'];
        completedElement.innerText = snapshot.val()['completed'];
    });
});


const trackButton = document.querySelector('.track-book-button');

function incrementInProgress(uid) {
    let current_progress;

    rootRef.child(uid).once('value', snapshot => {
        current_progress = parseInt(snapshot.val()['in_progress']) + 1;
    });

    rootRef.child(uid).update({
        in_progress: current_progress
    });
}

function incrementCompletedDecrementProgress(uid) {
    let current_progress;
    let completed;

    rootRef.child(uid).once('value', snapshot => {
        current_progress = parseInt(snapshot.val()['in_progress']) - 1;
        completed = parseInt(snapshot.val()['completed']) + 1;
    });

    rootRef.child(uid).update({
        in_progress: current_progress,
        completed: completed
    });
}

function addBook(isbn, title, author, pages) {
    let uid = firebase.auth().currentUser.uid;
    db.ref('users/' + uid + '/books/' + isbn).set({
        isbn: isbn,
        title: title,
        author: author,
        pages: pages,
        current_page: '0'
    });

    incrementInProgress(uid);
}


const refreshButton = document.querySelector('.refresh-button');

if (refreshButton) {
    refreshButton.addEventListener("click", event => {
        event.preventDefault();

        visualizeUsersBooks();
    })
}

function visualizeUsersBooks() {
    const booksTable = document.querySelector('.books-info');

    let uid = firebase.auth().currentUser.uid;

    let userBooks;
    db.ref('users/' + uid + '/books').once('value', snapshot => {
        userBooks = snapshot.val();
    });

    booksTable.innerHTML = "";

    Object.values(userBooks).forEach(book => {
        let properties = Object.keys(book);
        let newBookElement = document.createElement("div");
        newBookElement.classList.add("books-table-cells");
        let htmlData = `
                <label class="isbn-cell">
                ${book.isbn}
                </label>
                <label class="title-cell">
                ${book.title}
                </label>
                <label class="author-cell">
                ${book.author}
                </label>
                <label class="current-page-cell">
                ${book.current_page}
                </label>
                <label class="pages-cell">
                ${book.pages}
                </label>
                `
        newBookElement.innerHTML = htmlData;
        booksTable.appendChild(newBookElement);
    });
}


function updateProgressOnBook(isbn, toAdd) {
    let uid = firebase.auth().currentUser.uid;

    let toAddInt = parseInt(toAdd);
    if (toAddInt == NaN || toAddInt <= 0) {
        alert("Enter a number(positive integer) of how many pages you have read.");
        return;
    }

    let current_page;
    let total_pages;

    let isCompleted = false;

    db.ref('users/' + uid + '/books/' + isbn).once('value', snapshot => {
        current_page = parseInt(snapshot.val()['current_page']);
        total_pages = parseInt(snapshot.val()['pages']);

        if (current_page == total_pages) {
            alert("You have already finished reading this book.");
            return;
        }

        current_page += toAddInt;

        if (current_page >= total_pages) {
            current_page = total_pages;
            isCompleted = true;
        }
    });

    db.ref('users/' + uid + '/books/' + isbn).update({
        current_page: current_page
    })

    if (isCompleted) {
        incrementCompletedDecrementProgress(uid);
    }
}

if (trackButton) {
    trackButton.addEventListener("click", event => {
        event.preventDefault();

        const isbnEl = document.querySelector('.track-book-isbn');
        const isbn = isbnEl.value;

        let booksMap = getBooksMap();
        if (isbn == "") {
            alert("Enter ISBN to track.");
        } else {
            if (booksMap.has(isbn)) {
                var uid = firebase.auth().currentUser.uid;

                db.ref('users/' + uid + '/books/' + isbn).once("value", snapshot => {
                    if (snapshot.exists()) {
                        alert("You are already tracking a book with this ISBN.");
                    } else {
                        let newBook = booksMap.get(isbn);
                        addBook(isbn, newBook.getTitle(), newBook.getAuthor(), newBook.getPages());
                    }
                }, (error) => {
                    if (error) {
                        alert(error.message);
                    }
                });
            } else {
                alert("There isn't a book with this ISBN in our records.");
            }
        }
        isbnEl.value = "";
    });
}


const addButton = document.querySelector('.update-progress-button');
if (addButton) {
    addButton.addEventListener("click", event => {
        event.preventDefault();

        const isbnEl = document.querySelector('.update-progress[name=isbn]');
        const pagesEl = document.querySelector('.update-progress[name=pages]');
        const isbn = isbnEl.value;
        const pages = pagesEl.value;

        if (isbn == "" || pages == "") {
            alert("Enter ISBN to track and pages to add.");
            isbnEl.value = "";
            pagesEl.value = "";
            return;
        }

        var uid = firebase.auth().currentUser.uid;

        db.ref('users/' + uid + '/books/' + isbn).once("value", snapshot => {
            if (snapshot.exists()) {
                updateProgressOnBook(isbn, pages);
            } else {
                alert("The ISBN you haveve entered is not being tracked.");
                return;
            }
        }, (error) => {
            if (error) {
                alert(error.message);
            }
        });

        isbnEl.value = "";
        pagesEl.value = "";
        visualizeUsersBooks();
    });
}