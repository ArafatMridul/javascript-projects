const container = document.querySelector(".container");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

container.addEventListener("wheel", (e) => {
    e.preventDefault();
    container.scrollLeft += e.deltaY;
})

leftArrow.addEventListener("click", () => {
    container.scrollLeft -= 450;
})

rightArrow.addEventListener("click", () => {
    container.scrollLeft += 450;
})