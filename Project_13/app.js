const submitBtn = document.querySelector(".submit-btn");
const popUp = document.querySelector(".pop-up");
const okBtn = document.querySelector(".ok-btn");

submitBtn.addEventListener("click", () => {
    console.log(popUp);
    popUp.classList.add("appear");
    console.log(popUp);
})

okBtn.addEventListener("click", () => {
    popUp.classList.remove("appear");
}) 