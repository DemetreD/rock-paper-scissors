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

const userInput = prompt(`Rock, Paper, Scissors?`);
console.log(getHumanChoice(userInput));
