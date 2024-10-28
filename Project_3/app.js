const questions = [
    {
        question: "Question 1",
        answers: [
            { text:"Answer 1?", correct: "false"},
            { text:"Answer 2?", correct: "false"},
            { text:"Answer 3?", correct: "true"},
            { text:"Answer 4?", correct: "false"},
        ]
    },
    {
        question: "Question 2",
        answers: [
            { text:"Answer 1?", correct: "true"},
            { text:"Answer 2?", correct: "false"},
            { text:"Answer 3?", correct: "false"},
            { text:"Answer 4?", correct: "false"},
        ]
    },
    {
        question: "Question 3",
        answers: [
            { text:"Answer 1?", correct: "false"},
            { text:"Answer 2?", correct: "true"},
            { text:"Answer 3?", correct: "false"},
            { text:"Answer 4?", correct: "false"},
        ]
    },
    {
        question: "Question 4",
        answers: [
            { text:"Answer 1?", correct: "false"},
            { text:"Answer 2?", correct: "false"},
            { text:"Answer 3?", correct: "false"},
            { text:"Answer 4?", correct: "true"},
        ]
    },
];

const questionTitle = document.querySelector(".question-title");
const answerBtnsSection = document.querySelector(".answer-buttons");
const nextBtn = document.querySelector(".next-btn");

let questionIndex = 0;
let score = 0;


function startQuiz() {
    questionIndex = 0;
    score = 0;

    nextBtn.innerText = "Next";
    showQuestions();
}

function resetAns() {
    nextBtn.style.display = "none";
    while(answerBtnsSection.firstChild) {
        answerBtnsSection.removeChild(answerBtnsSection.firstChild);
    }
}

function showQuestions() {
    resetAns();
    let currentQuestion = questions[questionIndex];
    questionTitle.innerText = `${questionIndex+1}. ${currentQuestion.question}`;

    currentQuestion.answers.forEach((ans) => {
        let answerText = document.createElement("button");
        answerText.classList.add("btn");
        if(ans.correct) {
            answerText.dataset.correct = ans.correct;
        }
        console.log(answerText);
        answerText.innerText = ans.text;
        answerBtnsSection.appendChild(answerText);

        answerText.addEventListener("click", showAnswer)
    })
}

function showAnswer(e) {
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";

        if(isCorrect) {
            selectedBtn.classList.add("correct");
            score++;
        } else {
            selectedBtn.classList.add("incorrect");
        }

        Array.from(answerBtnsSection.children).forEach((button) => {
            if(button.dataset.correct === "true") {
                button.classList.add("correct");
            }
            button.disabled = true;
        })
        nextBtn.style.display = "block";
    }            

function handleNext() {
    questionIndex++;

    if(questionIndex < questions.length) {
        showQuestions();
    } else {
        showScore();
    }
}

function showScore() {
    resetAns();
    questionTitle.innerHTML = `you scored ${score} out of ${questions.length}!`;

    nextBtn.style.display = "block";
    nextBtn.innerText = "Play Again";
}

nextBtn.addEventListener("click", () => {
    if(questionIndex < questions.length) {
        handleNext();
    } else {
        startQuiz();
    }
})

startQuiz();