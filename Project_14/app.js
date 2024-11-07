const eye = document.querySelector("i");
const input = document.querySelector(".text-input");

eye.addEventListener("click", () => {
    if(eye.classList.contains("fa-eye")) {
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");
        input.type = "password";
    } else {
        eye.classList.add("fa-eye");
        eye.classList.remove("fa-eye-slash");
        input.type = "text";
    }
}) 