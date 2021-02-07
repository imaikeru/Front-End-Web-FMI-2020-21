const loginFormElement = document.getElementById("login-form");
const registerFormElement = document.getElementById("register-form");

const emailFormElement = document.querySelector(".auth-input[name=email]");
const emailErrorFE = document.querySelector(".")
const passwordFormElement = document.querySelector(".auth-input[name=password]");
const repeatPasswordFormElement = document.querySelector(".auth-input[name=repeat-password]");


const validatePassword = (password) => {
    const hasSpecialSymbol = "!@#$%^&*()".split("").some(symbol => password.includes(symbol));
    const hasSmallLetter = /([a-z])/.test(password);
    const hasCapitalLetter = /([A-Z])/.test(password);
    const hasMinWidth = password.length > 7;
    const isShorterThanMaxWidth = password.length < 65;
}


const validateEmail = (email) => {
    const notEmpty = Boolean(email.length);
    const hasEmailSign = email.includes("@");
    const hasDotSign = email.includes(".");
    const hasMinWidth = email.length > 7;
    const isShorterThanMaxWidth = email.length < 65;
}