const inputBox = document.querySelector("#pass");
const generateBtn = document.querySelector(".generate-btn");
const copyBtn = document.querySelector("#copy-btn");

const passLen = 12;

generateBtn.addEventListener("click", generatePass);

function generatePass() {
    let password = "";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwx";
    const number = "0123456789";
    const symbol = "!@#$%^&*()_-+=<>/|{}[]";
    const allChar = upperCase + lowerCase + number + symbol;

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(passLen > password.length) {
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }

    inputBox.value = password;
}

copyBtn.addEventListener("click", () => {
    inputBox.select();
    document.execCommand("copy");
})