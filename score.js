// Iteration 5: Store the player score and display it on the game over screen
var playAgainButton = document.getElementById("play-again-button")
playAgainButton.addEventListener('click',() =>{
    window.location.href = 'index.html'
})

var scoreBoard = document.getElementById('score-board')

let score = localStorage.getItem("score");
scoreBoard.textContent = score