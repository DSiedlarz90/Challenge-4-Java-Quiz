//Global Variables
var highScoreList = document.getElementById('#high-score');
var clearHighScoreBtn = document.getElementsByClassName('.clearHighScore')

//On page load, run showHighScores();
window.onload = showHighScore();

//Function to load high scores onto screen.
function showHighScore() {

    var highScores = JSON.parse(localStorage.getItem('highscores')) || [];
    if (highScores === null) {
        return;
    };
console.log(highScores)
    for (i = 0; i < highScores.length; i++) {
        var newHighScore = document.createElement("li");
        newHighScore.classList.add("leaderboard");
        var text = document.createTextNode(highScores[i].initials + " - " + highScores[i].score);
        newHighScore.appendChild(text);
        var element = document.getElementById("high-score")
        element.appendChild(newHighScore);
    };
};

//Function to clear highscores if button is clicked.
function clearHighScores() {
    localStorage.clear();
    location.reload();
};

