// selection
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector("#results");
const personScore = document.querySelector("#personScore");
const compScore = document.querySelector("#computerScore");
const resetBtn = document.querySelector("#resetBtn");
const personSel = document.querySelector(".person__selection");
const computerSel = document.querySelector(".computer__selection");

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

const endGame = function () {
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;
};

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
  personSel.textContent = "";
  computerSel.textContent = "";
};

const checkWinner = function (humanChoice, computerChoice) {
  personSel.textContent = humanChoice;
  computerSel.textContent = computerChoice;
  if (humanChoice === computerChoice) {
    results.textContent = `Tie!`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    personScore.textContent = ++humanScore;
    results.textContent = `You win!`;
  } else {
    compScore.textContent = ++computerScore;
    results.textContent = `You lose!`;
  }
};

const playRound = function (humanChoice, computerChoice) {
  checkWinner(humanChoice, computerChoice);

  const WIN_SCORE = 5;

  if (humanScore === WIN_SCORE) {
    results.textContent = `You win!`;
    endGame();
    resetBtn.classList.remove("reset__btn");
    resetBtn.classList.add("reset__button");
  } else if (computerScore === WIN_SCORE) {
    results.textContent = `You lose!`;
    endGame();
    resetBtn.classList.remove("reset__btn");
    resetBtn.classList.add("reset__button");
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
