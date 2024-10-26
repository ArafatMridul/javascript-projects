const input = document.querySelector("#input_box");
const addBtn = document.querySelector(".add-btn");
const error = document.querySelector(".error");
error.style.display = "none";
let ul = document.querySelector(".task-list");

addBtn.addEventListener("click", () => {
    if(input.value === "") {
        error.style.display = "block";
    } else {
        error.style.display = "none";
        let li = document.createElement("li");
        let span = document.createElement("span");
        li.innerText = input.value;
        span.innerHTML = `<img src="assets/cross.png" alt="" width="20" height="20">`;
        li.appendChild(span);
        ul.appendChild(li);
    }
    input.value = "";
})

ul.addEventListener("click", (e) => {
    if(e.target.tagName == "LI") {
        e.target.classList.toggle("checked");
    } else if(e.target.tagName == "IMG" || e.target.tagName == "SPAN") {
        e.target.parentElement.parentElement.remove();
    }
})