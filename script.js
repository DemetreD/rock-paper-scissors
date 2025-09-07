// selection
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector("#results");
const personScore = document.querySelector("#personScore");
const compScore = document.querySelector("#computerScore");
const resetBtn = document.querySelector("#resetBtn");

//computer choice
const getComputerChoice = function () {
  const options = ["rock", "paper", "scissors"];
  const choice = Math.floor(Math.random() * options.length);
  let randomChoice = options[choice];
  return randomChoice;
};

//game

let humanScore = 0;
let computerScore = 0;
personScore.textContent = 0;
compScore.textContent = 0;
resetBtn.classList.add("reset__btn");

const updateUi = function () {
  personScore.textContent = 0;
  compScore.textContent = 0;
  humanScore = 0;
  computerScore = 0;
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
  results.textContent = "";
  resetBtn.classList.add("reset__btn");
};

// const checkWinner = function (humanChoice, computerChoice) {};

const playRound = function (humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    results.textContent = `It's a Tie!`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    personScore.textContent = ++humanScore;
    results.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    compScore.textContent = ++computerScore;
    results.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
  }

  if (humanScore === 5) {
    results.textContent = `You win! Human: ${humanScore}, Computer: ${computerScore}`;
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    resetBtn.classList.remove("reset__btn");
  } else if (computerScore === 5) {
    results.textContent = `You lose! Computer: ${computerScore}, Human: ${humanScore}`;
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    resetBtn.classList.remove("reset__btn");
  }
};

rock.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

paper.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

scissors.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});

resetBtn.addEventListener("click", () => {
  updateUi();
});
