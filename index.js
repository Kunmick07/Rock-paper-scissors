const choices = ["Rock", "Paper", "Scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const PlayerScoreDisplay = document.getElementById("PlayerScoreDisplay");
const ComputerScoreDisplay = document.getElementById("ComputerScoreDisplay");

let PlayerScore = 0;
let ComputerScore = 0;

function playGame(playerChoice) {

    // 🛑 stop game if someone already won
    if (PlayerScore === 5 || ComputerScore === 5) {
        return;
    }

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    const normalizedPlayer = playerChoice.toLowerCase();
    const normalizedComputer = computerChoice.toLowerCase();

    if (normalizedPlayer === normalizedComputer) {
        result = "IT'S A TIE!";
    } else {
        switch (normalizedPlayer) {
            case "rock":
                result = (normalizedComputer === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (normalizedComputer === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (normalizedComputer === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    // Display choices
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;

    // Color reset
    resultDisplay.classList.remove("greentext", "redtext");

    if (result === "YOU WIN!") {
        PlayerScore++;
        PlayerScoreDisplay.textContent = PlayerScore;
        resultDisplay.classList.add("greentext");
    } 
    else if (result === "YOU LOSE!") {
        ComputerScore++;
        ComputerScoreDisplay.textContent = ComputerScore;
        resultDisplay.classList.add("redtext");
    }

    // 🏆 check for winner
    if (PlayerScore === 5) {
        resultDisplay.textContent = "🎉 YOU WON THE GAME!";
    } 
    else if (ComputerScore === 5) {
        resultDisplay.textContent = "💻 COMPUTER WON THE GAME!";
    } 
    else {
        resultDisplay.textContent = result;
    }
}
