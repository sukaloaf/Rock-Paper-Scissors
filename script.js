const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;
let playerWins = 0;
let computerWins = 0;

choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
    updateWinsDisplay();
    resultColor();
  })
);

function computerTurn() {
  const randNum = Math.floor(Math.random() * 3) + 1;

  switch (randNum) {
    case 1:
      computer = "Rock";
      break;
    case 2:
      computer = "Paper";
      break;
    case 3:
      computer = "Scissors";
      break;
  }
}

function checkWinner() {
  if (player == computer) {
    return "Draw!";
  } else if (computer == "Rock") {
    if (player == "Paper") {
      playerWins++;
      return "You Win!";
    } else {
      computerWins++;
      return "You Lose!";
    }
  } else if (computer == "Paper") {
    if (player == "Scissors") {
      playerWins++;
      return "You Win!";
    } else {
      computerWins++;
      return "You Lose!";
    }
  } else if (computer == "Scissors") {
    if (player == "Rock") {
      playerWins++;
      return "You Win!";
    } else {
      computerWins++;
      return "You Lose!";
    }
  }
}

function updateWinsDisplay() {
  document.querySelector("#playerWins").textContent = `${playerWins}`;
  document.querySelector("#computerWins").textContent = `${computerWins}`;
}

function resultColor() {
  if (checkWinner() == "Draw!") {
    resultText.style.color = "#FAFA33";
  } else if (checkWinner() == "You Lose!") {
    resultText.style.color = "red";
  } else {
    resultText.style.color = "green";
  }
}
