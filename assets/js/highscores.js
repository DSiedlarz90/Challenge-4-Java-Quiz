var highScoreList = document.getElementById('#high-score');
var clearHighScoreBtn = document.getElementsByClassName('.clearHighScore')

window.onload = showHighScore();

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

function clearHighScores() {
    localStorage.clear();
    location.reload();
};

