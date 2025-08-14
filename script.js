//computer choice
const getComputerChoice = function () {
  const options = ["Rock", "Paper", "Scissors"];
  const choice = Math.floor(Math.random() * options.length);
  let randomChoice = options[choice];
  return randomChoice;
};

// console.log(getComputerChoice());

//human choice
const getHumanChoice = function (option) {
  return option;
};

// console.log(getHumanChoice(userInput));

let humanScore = 0;
let computerScore = 0;

const playRound = function (humanChoice, computerChoice) {
  if (
    (humanChoice.toLowerCase() === "rock" && computerChoice === "Scissors") ||
    (humanChoice.toLowerCase() === "paper" && computerChoice === "Rock") ||
    (humanChoice.toLowerCase() === "scissors" && computerChoice === "Paper")
  ) {
    humanScore++;
    console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
  }

  if (
    (computerChoice === "Rock" && humanChoice.toLowerCase() === "scissors") ||
    (computerChoice === "Paper" && humanChoice.toLowerCase() === "rock") ||
    (computerChoice === "Scissors" && humanChoice.toLowerCase() === "paper")
  ) {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  }
};

const userInput = prompt(`Rock, Paper, Scissors?`);

const humanSelection = getHumanChoice(userInput);
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
