const headerSection = document.querySelector(".header-section");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon")
const gototop = document.querySelector(".footer a");
const darkLightBtn = document.querySelector("#dark-light");

hamburgerIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    headerSection.classList.toggle("menu-open");
})

closeIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    headerSection.classList.toggle("menu-open");
})

gototop.scrollTo(0, 0);

darkLightBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme")

    if(document.body.classList.contains("dark-theme")) {
        darkLightBtn.classList.remove("fa-moon");
        darkLightBtn.classList.add("fa-sun")
    } else {
        darkLightBtn.classList.add("fa-moon");
        darkLightBtn.classList.remove("fa-sun");
    }

})