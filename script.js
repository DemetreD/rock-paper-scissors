const getComputerChoice = function () {
  const options = ["Rock", "Paper", "Scissors"];
  const choice = Math.floor(Math.random() * options.length);
  let randomChoice = options[choice];
  return randomChoice;
};

console.log(getComputerChoice());
