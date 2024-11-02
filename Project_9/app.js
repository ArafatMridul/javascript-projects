const btns = document.querySelectorAll("button");
const toastBox = document.querySelector(".toast-box");

let successMsg = '<img src="./asset/success.png" alt=""> <p>Successfully Submitted</p>';
let errorMsg = '<img src="./asset/error.png" alt=""> <p>Please fix the error</p>';
let invalidMsg = '<img src="./asset/invalid.png" alt=""> <p>Invalid, please check again</p>';

function showNotification(msg) {
    const div = document.createElement("div");
    div.classList.add("toast");

    if(msg.includes("error")) {
        div.classList.add("error");
    }

    if(msg.includes("Invalid")) {
        div.classList.add("invalid")
    }

    div.innerHTML = msg;
    toastBox.appendChild(div);

    setTimeout(() => {
        div.remove();
    }, 4000)
}