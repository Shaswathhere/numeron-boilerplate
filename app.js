// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.
// Get references to the button and game page elements
const playButton = document.getElementById("play-button");


// Add a click event listener to the Play button
playButton.addEventListener("click", () => {
    window.location.href = "game.html";

});
