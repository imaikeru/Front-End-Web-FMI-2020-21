class Book {
    constructor(isbn, title, author, pages) {
        var _isbn = isbn;
        var _title = title;
        var _author = author;
        var _pages = pages;

        this.getIsbn = function() {
            return _isbn;
        }

        this.getTitle = function() {
            return _title;
        }

        this.getAuthor = function() {
            return _author;
        }

        this.getPages = function() {
            return _pages;
        }
    }
}

const books_isbns = ["9780747532743", "9780439064873", "9780439136358", "9780439139601", "9780439358064", "9780747581109", "9780545139700"];

const books = new Map();

function bookFactory() {
    let book = JSON.parse(this.responseText);

    let isbn;

    for (let prop in book) {
        isbn = prop;
        break;
    }

    book = book[isbn];

    isbn = isbn.split(":")[1];

    const title = book.title;
    const author = book.authors[0].name;
    const number_of_pages = book.number_of_pages;

    let newBook = new Book(isbn, title, author, number_of_pages);

    console.log(newBook.getIsbn(), " ", newBook.getTitle(), " ", newBook.getAuthor(), " ", newBook.getPages());
    books.set(isbn, newBook);
    console.log(books.size);
}

const getBooksData = () => {
    books_isbns.forEach(isbn => {
        var request = new XMLHttpRequest();
        request.addEventListener("load", bookFactory);

        const req = "https://openlibrary.org/api/books?bibkeys=ISBN:" + isbn + "&jscmd=data&format=json";

        request.open("GET", req);
        // request.open("GET", "https://openlibrary.org/api/books?bibkeys=ISBN:9780545010221&jscmd=data&format=json");
        request.send();
    });
}

getBooksData();


// function printer() {
//     console.log(this.responseText);
//     let book = JSON.parse(this.responseText);

//     let root;

//     for (let prop in book) {
//         root = prop;
//         break;
//     }

//     book = book[root];

//     console.log(root);
//     console.log(book);

//     const title = book.title;
//     const author = book.authors[0].name;
//     const number_of_pages = book.number_of_pages;


//     console.log(title);
//     console.log(author);
//     console.log(number_of_pages);
// }

// var request = new XMLHttpRequest();

// request.addEventListener("load", printer);
// request.open("GET", "https://openlibrary.org/api/books?bibkeys=ISBN:9780545010221&jscmd=data&format=json");
// request.send();


// title   author   date_published number_of_pages (last read page) 

// firebase

// xmlhttprequest

// въпроси по презентациите, разлика между див и секция, какво е бордър бокс и т.н., марджин, паддинг тн тн тн