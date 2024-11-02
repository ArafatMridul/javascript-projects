const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
const container = document.querySelector(".container");
const input = document.querySelector("#text-input");
const imgSection = document.querySelector("qr-img");
const generateBtn = document.querySelector("button");
const code = document.querySelector("#code");


function getQRCode() {
    if(input.value.length > 0) {
        code.src = url + input.value;
        container.classList.add("img-appear");
    } else {
        input.classList.add("error");

        setTimeout(() => {
            input.classList.remove("error");
        }, 525)
    }
    
}

generateBtn.addEventListener("click", getQRCode);