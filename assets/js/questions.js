/* Global Variables */
var question = document.querySelector("#question");
var choices = Array.from(document.querySelectorAll("#choice-text"));
var timer = document.getElementsByClassName("#timer");
var currentQuestion = {};
var acceptingAnswers = true;
var timer = 76;
var questionCounter = 0;
var availableQuestions = [];
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var choiceD = document.getElementById("choiceD");
questionIndex = 0

//Questions for quiz
var questions = [
    { question: 'Commonly used data types Do Not Include:', 
        answer: '3. alerts', 
        choices: ['1. strings', '2. booleans', '3. alerts', '4. numbers']
    },
    { question: 'The condition in an if/else statement is enclosed with _________.', 
        answer: '3. parenthesis', 
        choices: ['1. quotes', '2. curly brackets', '3. parenthesis', '4. square brackets']
    },
    { question: 'Arrays in Javascript can be used to store ________.', 
        answer: '4. all of the above', 
        choices:  ['1. numbers and strings', '2. other arrays', '3. booleans', '4. all of the above']
    },
    { question: 'String values must be enclosed within ________ when being assigned to variables.', 
        answer: '3. quotes', 
        choices:  ['1. commas', '2. curly brackets', '3. quotes', '4. parenthesis']
    },
    { question: 'A very useful tool used during development and debugging for printing content in the debugger is:', 
        answer: '4. console.log', 
        choices:  ['1. Javascript', '2. terminal/bash', '3. for loops', '4. console.log']
    },
];

var maxQuestions = 4

myTimer = function() {
    timer = timer - 1
    document.getElementById("timer").innerHTML = timer;
    clearInterval(timer <= 0)
    
    if (timer === 0) {
        localStorage.setItem("finalscore", timer)
        return window.location.assign("./end.html");
    }
};
setInterval(myTimer, 1000);

startGame = function() {
    questionCounter = 0
    questionIndex = 0
    getNewQuestion();
    myTimer();
};

getNewQuestion = function() {
    question.textContent = questions[questionIndex].question;
    choiceA.textContent = questions[questionIndex].choices[0];
    choiceB.textContent = questions[questionIndex].choices[1];
    choiceC.textContent = questions[questionIndex].choices[2];
    choiceD.textContent = questions[questionIndex].choices[3];
};

function checkAnswer(answer) {
    if(questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
        var correct = document.getElementById("correct");
        var wrong = document.getElementById("wrong");
        correct.classList.remove("correct");
        wrong.classList.add("wrong");

    }

    if(questions[questionIndex].answer !== questions[questionIndex].choices[answer]) {
        var correct = document.getElementById("correct");
        var wrong = document.getElementById("wrong");
        correct.classList.add("correct");
        wrong.classList.remove("wrong");
        timer = timer - 10
    }
    questionIndex++;
    if (questionIndex < questions.length) {
        getNewQuestion();
    } else {
        localStorage.setItem("finalscore", timer)
        return window.location.assign("./end.html");
    }

};
function chooseA () {
    checkAnswer(0);
};
function chooseB () {
    checkAnswer(1);
};
function chooseC () {
    checkAnswer(2);
};
function chooseD () {
    checkAnswer(3);
};


startGame();

choiceA.addEventListener("click", chooseA);
choiceB.addEventListener("click", chooseB);
choiceC.addEventListener("click", chooseC);
choiceD.addEventListener("click", chooseD);