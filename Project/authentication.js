const initializeFirebase = () => {
    var firebaseConfig = {
        apiKey: "AIzaSyDITrQRXodSzP7NhmyFMQKZ7qhpMZp4Irs",
        authDomain: "bookify-deae8.firebaseapp.com",
        projectId: "bookify-deae8",
        storageBucket: "bookify-deae8.appspot.com",
        messagingSenderId: "63070453636",
        appId: "1:63070453636:web:4088cf2fee0a21a6e4a7d1",
        measurementId: "G-3H9DRED6JE"
    };

    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    alert("Initialized firebase");
}

initializeFirebase();

const loginFormElement = document.getElementById("login-form");
const registerFormElement = document.getElementById("register-form");

const emailFormElement = document.querySelector(".auth-input[name=email]");
const emailErrorFE = document.getElementById("email-error");
const passwordFormElement = document.querySelector(".auth-input[name=password]");
const passwordErrorFE = document.getElementById("password-error");
const repeatPasswordFormElement = document.querySelector(".auth-input[name=repeat-password]");
const repeatPasswordErrorFE = document.getElementById("repeat-password-error");

const printErrorMessage = (errorElement, message) => {
    errorElement.innerText = message;
    errorElement.style.visibility = "visible";
}


const validatePassword = (password, errorElement) => {
    const notEmpty = Boolean(password.length);
    if (!notEmpty) {
        printErrorMessage(errorElement, "*Required");
        return false;
    }

    const hasSmallLetter = /([a-z])/.test(password);
    if (!hasSmallLetter) {
        printErrorMessage(errorElement, "Password should contain at least one small letter.");
        return false;
    }

    const hasCapitalLetter = /([A-Z])/.test(password);
    if (!hasCapitalLetter) {
        printErrorMessage(errorElement, "Password should contain at least one capital letter.");
        return false;
    }

    const hasNumber = /([0-9])/.test(password);
    if (!hasNumber) {
        printErrorMessage(errorElement, "Password should contain at least one number.");
        return false;
    }

    const hasSpecialSymbol = "!@#$%^&*()".split("").some(symbol => password.includes(symbol));
    if (!hasSpecialSymbol) {
        printErrorMessage(errorElement, "Password should contain at least one of \"!@#$%^&*()\".");
        return false;
    }

    const hasMinWidth = password.length > 7;
    const isShorterThanMaxWidth = password.length < 65;
    if (!(hasMinWidth && isShorterThanMaxWidth)) {
        printErrorMessage(errorElement, "Password length should be between 8 and 64 symbols.");
        return false;
    }

    errorElement.style.visibility = "hidden";
    return true;
}


const validateEmail = (email) => {
    const notEmpty = Boolean(email.length);

    if (!notEmpty) {
        printErrorMessage(emailErrorFE, "*Required");
        return false;
    }

    const hasEmailSign = email.includes("@");
    if (!hasEmailSign) {
        printErrorMessage(emailErrorFE, "Email sign (@) missing.");
        return false;
    }

    const hasDotSign = email.includes(".");
    if (!hasDotSign) {
        printErrorMessage(emailErrorFE, "Dot missing.");
        return false;
    }

    const hasMinWidth = email.length > 7;
    const isShorterThanMaxWidth = email.length < 65;

    if (!(hasMinWidth && isShorterThanMaxWidth)) {
        printErrorMessage(emailErrorFE, "Email length should be between 8 and 64 symbols.");
        return false;
    }

    emailErrorFE.style.visibility = "hidden";
    return true;
}


if (loginFormElement) {
    const logInButton = document.getElementsByClassName("login");
    loginFormElement.addEventListener("submit", event => {
        event.preventDefault();

        const emailValue = emailFormElement.value;
        const passwordValue = passwordFormElement.value;

        const hasCorrectEmail = validateEmail(emailValue);
        const hasCorrectPassword = validatePassword(passwordValue, passwordErrorFE);

        if (hasCorrectEmail && hasCorrectPassword) {
            alert("Correct login data");
        }
        else {
            // alert("Invalid login data");
        }
    });


} else if (registerFormElement) {
    registerFormElement.addEventListener("submit", event => {
        event.preventDefault();

        const emailValue = emailFormElement.value;
        const passwordValue = passwordFormElement.value;
        const repeatPasswordValue = repeatPasswordFormElement.value;

        const hasCorrectEmail = validateEmail(emailValue);
        const hasCorrectPassword = validatePassword(passwordValue, passwordErrorFE);
        const hasCorrectRepeatPassword = validatePassword(repeatPasswordValue, repeatPasswordErrorFE);
        const passwordsMatch = repeatPasswordValue == passwordValue;

        if (hasCorrectEmail && hasCorrectPassword && hasCorrectRepeatPassword) {
            if (!passwordsMatch) {
                printErrorMessage(repeatPasswordErrorFE, "Passwords do not match.");
            } else {
                alert("passwords match");
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then((userCredential) => {
                        var user = userCredential.user;
                        window.location.replace = "/user_list"
                    })
                    .catch((error) => {
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        alert(errorMessage);
                    });
            }
        }
    })
}