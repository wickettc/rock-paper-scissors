var playerSelection, computerSelection, playerScore, computerScore, round, gamePlaying;

function init() {
    round = 1;
    playerScore = 0;
    computerScore = 0;
    gamePlaying = true;
    document.querySelector("#result").textContent = "Best of 5 Game"
    document.querySelector("#playersScore").textContent = 0;
    document.querySelector("#computerScore").textContent = 0;
    document.querySelector("#round").textContent = 1;
};


function computerPlay() {
    var x = Math.floor(Math.random() * 3);
    if (x === 0) {
        computerSelection = "Rock";
    } else if (x === 1) {
        computerSelection = "Scissors";
    } else if (x === 2) {
        computerSelection = "Paper";
    };
    return computerSelection;
};

function playGame() {
    if (gamePlaying) {
        computerPlay();
        checkSelection();
    }
};

function checkSelection() {
    if ((playerSelection === "Rock" && computerSelection === "Scissors")||(playerSelection === "Paper" && computerSelection === "Rock")||
    (playerSelection === "Scissors" && computerSelection === "Paper")) {
        playerScore++;
        if (playerScore === 3) {
            document.querySelector("#playersScore").textContent = playerScore;
            document.querySelector("#result").textContent = "YOU WON THE GAME!"
            return gamePlaying = false;
        };
        round++
        document.querySelector("#round").textContent = round;
        document.querySelector("#playersScore").textContent = playerScore;
        document.querySelector("#result").textContent = "You win this round."
    } else if ((playerSelection === "Rock" && computerSelection === "Paper")||(playerSelection === "Paper" && computerSelection === "Scissors")||
    (playerSelection === "Scissors" && computerSelection === "Rock")) {
        computerScore++;
        if (computerScore === 3) {
            document.querySelector("#computerScore").textContent = computerScore;
            document.querySelector("#result").textContent = "YOU LOSE! COMPUTER WINS!"
            return gamePlaying = false;
        }
        round++;
        document.querySelector("#round").textContent = round;
        document.querySelector("#computerScore").textContent = computerScore;
        document.querySelector("#result").textContent = "Computer wins this round."
    } else if (playerSelection === computerSelection) {
        document.querySelector("#result").textContent = "Draw,go again."
    }
    
};

document.querySelector("#rock").addEventListener("click", function(){
    playerSelection = "Rock";
    playGame();
});
    
document.querySelector("#paper").addEventListener("click", function(){
    playerSelection = "Paper";
    playGame();
});
    
document.querySelector("#scissors").addEventListener("click", function(){
    playerSelection = "Scissors";
    playGame();
});

document.querySelector("#reset").addEventListener("click", init);


init();

