//Global Variables
var timer = localStorage.getItem("finalscore");
var finalscore = document.getElementById("finalscore");
var saveScoreButton = document.getElementById("saveScoreButton");
var initials = document.getElementById("initials");
gameOver = function () {
    document.getElementById("finalscore").innerHTML = "Your final score is: "+ timer;
    console.log(timer);
};

//Function to save high scores 
function saveHighScores(event) {
    event.preventDefault();

    // stop function if initial is blank
    if (initials.value === "") {
        alert("Please enter your initials!");
        return;
    }    

    // store scores into local storage
    var savedHighScores = localStorage.getItem("highscores");
    var scoresArray;

    if (savedHighScores === null) {
        scoresArray = [];
    } else {
        scoresArray = JSON.parse(savedHighScores)
    }

    var userScore = {
        initials: initials.value,
        score: timer
    };
    console.log(userScore);
    scoresArray.push(userScore);

    // stringify array in order to store in local
    var scoresArrayString = JSON.stringify(scoresArray);
    window.localStorage.setItem("highscores", scoresArrayString);
};

//On window load, Run function gameOver();
window.onload = gameOver();

//Event listener for submit button after initials entered. Brings to highscore page.
saveScoreButton.addEventListener("click", function(event){ 
    saveHighScores(event);
    return window.location.assign("./highscores.html");
});