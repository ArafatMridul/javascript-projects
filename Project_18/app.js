const form = document.querySelector("form");
const sendBtn = document.querySelector("button");
const feedbackText = document.querySelector("#feedback");

sendBtn.addEventListener("click", () => {
    feedbackText.innerHTML = `Thanks for subscribing. We'll get back soon.`;
    setTimeout(() => {
        feedbackText.innerHTML = ``;
        form.reset();
    }, 4000);
})

const scriptURL =
    "https://script.google.com/macros/s/AKfycbwxsJ5_2nc2vFUAv_e8FhbVlyUFEENtxLKAwmdhh67hd5Zkv-t7Bhi-G6Vdu9i_RDhj/exec";
const Form = document.forms["submit-to-google-sheet"];

Form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => console.log("Success!", response))
        .catch((error) => console.error("Error!", error.message));
});