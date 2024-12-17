let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScoreUpdate = document.querySelector("#user-score");
let compScoreUpdate = document.querySelector("#comp-score");

const drawGame = () => {
  console.log("game tie");
  msg.innerText = "Game Was draw! Try Again.";
  msg.style.backgroundColor = "#1a0834";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    console.log("User Win");
    msg.innerText = `You Win. Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    userScore++;
    userScoreUpdate.innerText = userScore;
  } else {
    console.log("Computer Win");
    msg.innerText = `You lose. Computer ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    compScore++;
    compScoreUpdate.innerText = compScore;
  }
};

const genCompChoice = () => {
  const options = ["Rock", "Paper", "Scissors"];
  const ranIdx = Math.floor(Math.random() * 3);
  return options[ranIdx];
};

const playGame = (userChoice) => {
  console.log(`User Choice = ${userChoice}`);
  const compChoice = genCompChoice();
  console.log(`Computer Choice = ${compChoice}`);
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "Rock") {
      userWin = compChoice === "Paper" ? false : true;
    } else if (userChoice === "Paper") {
      userWin = compChoice === "Scissors" ? false : true;
    } else {
      userWin = compChoice === "Rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

