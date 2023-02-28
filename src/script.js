const passwordEl = document.getElementById('password');
const copyBtn = document.getElementById('copy');
const lengthRng = document.getElementById('length');
const upperChk = document.getElementById('upper');
const lowerChk = document.getElementById('lower');
const numbersChk = document.getElementById('numbers');
const symbolsChk = document.getElementById('symbols');
const generateBtn = document.getElementById('generate');

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
    const length = lengthRng.value;

    let password = "";

    if (upperChk.checked) {
        password += getUppercase();
    }

    if (lowerChk.checked) {
        password += getLowercase();
    }

    if (numbersChk.checked) {
        password += getNumber();
    }

    if (symbolsChk.checked) {
        password += getSymbol();
    }

    for (let i = password.length; i < length; i++) {
        const x = generateX();
        password += x;
    }

    passwordEl.value = password;
}

function generateX() {
    const xs = [];
    if (upperChk.checked) {
        xs.push(getUppercase());
    }

    if (lowerChk.checked) {
        xs.push(getLowercase());
    }

    if (numbersChk.checked) {
        xs.push(getNumber());
    }

    if (symbolsChk.checked) {
        xs.push(getSymbol());
    }

    if (xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}

const copyContent = async () => {

    if (!passwordEl.value) {
        return;
    }

    passwordEl.select();
    passwordEl.setSelectionRange(0, 99999);

    try {
        await navigator.clipboard.writeText(passwordEl.value);
        alert('Password Copied to Clipboard!');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}

generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyContent);
window.addEventListener("load", generatePassword);