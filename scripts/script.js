// JavaScript for the loading animation and displaying the game content
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.getElementById("loading").style.display = "none";
        document.getElementById("game-container").style.display = "block";
    }, 3000); // Simulating a 3-second loading time
});
