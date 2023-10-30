const passwordBox = document.querySelector("#password");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&";

const allChars = upperCase + symbols + lowerCase + numbers;

const passwordLength = 12;

function createPassword() {
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }
    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();

    try {
        document.execCommand("copy");
        console.log("Text copied to clipboard: " + text);
    } catch (err) {
        console.error("Unable to copy text to clipboard", err);
    }
}