const questions = [
    {
        question: "Which Producer made the album called Rockstar without a guitar",
        answers: [
            { text:"Calm", correct: "false"},
            { text:"Jokhay", correct: "false"},
            { text:"Umair", correct: "true"},
            { text:"Metro", correct: "false"},
        ]
    },
    {
        question: "Which is the debut album of Juice WRLD?",
        answers: [
            { text:"Goodbye & Good Riddance", correct: "true"},
            { text:"Chasing Demons", correct: "false"},
            { text:"Death race for Love", correct: "false"},
            { text:"Legends never die", correct: "false"},
        ]
    },
    {
        question: "Valorant best skin for vandal?",
        answers: [
            { text:"Oni", correct: "false"},
            { text:"Prime", correct: "true"},
            { text:"Prelude to chaos", correct: "false"},
            { text:"Araxys", correct: "false"},
        ]
    },
    {
        question: "Valorant best skin for Phantom?",
        answers: [
            { text:"Neo Frontier", correct: "false"},
            { text:"Prime", correct: "false"},
            { text:"Oni", correct: "false"},
            { text:"Recon", correct: "true"},
        ]
    },
];

const questionTitle = document.querySelector(".question-title");
const optionContainer = document.querySelector(".answer-buttons");
const optionBtns = document.querySelectorAll(".btn");
const nextBtn = document.querySelector(".next-btn");

let currIndex = 0;
let score = 0;

function showQuestions() {
    reserState();
    const currQuestion = questions[currIndex];
    questionTitle.innerHTML = `${currIndex+1}. ${currQuestion.question}`;

    currQuestion.answers.forEach((answer) => {
        let optionBtn = document.createElement("button");
        optionBtn.classList.add("btn");
        optionBtn.innerText = answer.text;
        optionContainer.appendChild(optionBtn);

        if(answer.correct) {
            optionBtn.dataset.correct = answer.correct;
        }

        optionBtn.addEventListener("click", checkAns);
    }) 
}

function checkAns(e) {
    const clickedOption = e.target;
    const isCorrect = clickedOption.dataset.correct === "true";
    if(isCorrect) {
        clickedOption.classList.add("correct");
        score++;
    } else {
        clickedOption.classList.add("incorrect");
    }

    Array.from(optionContainer.children).forEach((optBtn) => {
        if(optBtn.dataset.correct === "true") {
            optBtn.classList.add("correct");
        }
        optBtn.disabled = true;
    });

    nextBtn.style.display = "block";
    nextBtn.addEventListener("click", nextQuestion);
}

function showScore() {
    questionTitle.innerHTML = `You scored ${score} out of ${questions.length}!`;
    
    nextBtn.innerText = "Play Again";
}

function handleNextQuestion() {
    reserState();
    currIndex++;
    if(currIndex < questions.length) {
        showQuestions();
    } else {
        showScore();
    }
}

function nextQuestion() {
    if(currIndex < questions.length) {
        handleNextQuestion();
    } else {
        startQuiz();
    }
}

function reserState() {
    while(optionContainer.firstChild) {
        optionContainer.removeChild(optionContainer.firstChild);
    }
}

function startQuiz() {
    currIndex = 0;
    score = 0;

    nextBtn.innerText = "Next";
    showQuestions();
}


startQuiz();