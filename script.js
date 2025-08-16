//computer choice
const getComputerChoice = function () {
  const options = ["rock", "paper", "scissors"];
  const choice = Math.floor(Math.random() * options.length);
  let randomChoice = options[choice];
  return randomChoice;
};

//human choice
const getHumanChoice = function () {
  let userInput = prompt("Rock, Paper, Scissors?");
  return userInput.toLowerCase();
};

//game
const playGame = function () {
  //round function
  let humanScore = 0;
  let computerScore = 0;

  const playRound = function (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(`It's a Tie!`);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
  };

  //5 rounds game
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
};

playGame();
