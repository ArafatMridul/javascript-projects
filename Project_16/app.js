const nameError = document.querySelector(".name-error");
const phoneError = document.querySelector(".phone-error");
const emailError = document.querySelector(".email-error");
const textError = document.querySelector(".text-error");
const submitError = document.querySelector(".submit-error");
const form = document.querySelector("#form");
const submit = document.querySelector("#submit");
const popUp = document.querySelector(".pop-up");

function validateName() {
    let name = document.querySelector("#text-input").value;
    if(name.length == 0) {
        nameError.innerHTML = `Name is required!`;
        return false;
    }
    if (!name.match(/^[A-Za-z]+(\s[A-Za-z]+)+$/)) {
        nameError.innerHTML = "Write full name!";
        return false;
    } else {
        nameError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        return true;
    }
}

function validatePhone() {
    let phone = document.querySelector("#number-input").value;
    if(phone.length == 0) {
        phoneError.innerHTML = `Phone is required!`;
        return false;
    }
    if(phone.length !== 11) {
        phoneError.innerHTML = "Number must be 11 digits!";
        return false;
    }
    if (!phone.match(/^[0-9]{11}$/)) {
        phoneError.innerHTML = "Number must be Valid!";
        return false;
    } else {
        phoneError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        return true;
    }
}

function validateEmail() {
    let email = document.querySelector("#email-input").value;
    if(email.length == 0) {
        emailError.innerHTML = `Email is required!`;
        return false;
    }
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        emailError.innerHTML = "Write a valid email!";
        return false;
    } else {
        emailError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        return true;
    }
}

function validateMessage() {
    const textarea = document.querySelector("#textaree-field").value;
    let required = 30;
    let left = 30 - textarea.length;

    if(left == 30) {
        textError.innerHTML = `Message required`;
        return false;
    } else if(left > 0) {
        textError.innerHTML = left + `more to go`;
        return false;
    }else if(left == 0 || left < 0) {
        textError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        return true;
    } 
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.style.transform = "scale(1.2)";
        submitError.innerHTML = `Fix error before submitting!`;
        setTimeout(() => {
            submitError.style.transform = "scale(0)";
        }, 1500);
        return false;
    } else {
        form.reset();
        nameError.innerHTML = ``;
        phoneError.innerHTML = ``;
        emailError.innerHTML = ``;
        textError.innerHTML = ``;
    }
})
