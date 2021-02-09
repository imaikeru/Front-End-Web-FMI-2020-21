firebase.auth().onAuthStateChanged(user => {
    if (validateUserSession()) {
        console.log("user is", user.email);

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