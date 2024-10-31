const notesContainer = document.querySelector(".notes-section");
const addNoteBtn = document.querySelector(".add-note");

addNoteBtn.addEventListener("click", () => {
    let input = document.createElement("div");
    input.classList.add("input-text");
    
    let textArea = document.createElement("textarea");
    textArea.id = "text-input";

    let img = document.createElement("img");
    img.src = "./assets/bin.png";
    
    input.appendChild(textArea);
    input.appendChild(img);
    notesContainer.appendChild(input);
    
    img.addEventListener("click", (e) => {
        e.target.parentElement.remove();
    })
});
