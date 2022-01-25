// Setting values
var userScore = 0;
var computerScore = 0;
var rounds = 1;

// Declaring consts for use in code logic
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const footer = document.getElementById("action-message");
const countdown = document.getElementById("countdown-container");
const countdownInner = document.getElementById("countdown");
const restart_div = document.getElementById("restart-button");

// Game starts
result_div.innerHTML = `<p>Select Your First Move</p>`;
// footer.innerHTML = `<p>CLICK ON THE EMOJI TO MAKE YOUR MOVE</p>`;

// Loop through an array and return that value of the comp
function getComputerSelection() {
  const options = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return options[randomNumber];
}

function getUserChoice(choice: string) {
  switch (choice) {
    case "rock":
      return rock_div;
    case "scissors":
      return scissors_div;
    case "paper":
      return paper_div;
    default:
      return null;
  }
}
// Convert case for display purposes
function convertCase(stringConvert: string) {
  return stringConvert === "paper"
    ? "Paper"
    : stringConvert === "scissors"
    ? "Scissors"
    : "Rock";
}

// Winning Condition
function victory(user: string, computer: string) {
  userScore++;
  userScore_span.innerHTML = userScore.toString();
  result_div.innerHTML = `<p>${convertCase(user)} beats ${convertCase(
    computer
  )}. Your victory! &#128077;</p>`;
  const roundStatus = document.getElementById(user);
  roundStatus.classList.add("winningStyles");
  userScore_span.classList.add("winningStyles");
  setTimeout(() => {
    roundStatus.classList.remove("winningStyles");
    userScore_span.classList.remove("winningStyles");
  }, 2500);
}

// Losing Condition
function defeat(user: string, computer: string) {
  computerScore++;
  computerScore_span.innerHTML = computerScore.toString();
  result_div.innerHTML = `<p>${convertCase(computer)} beats ${convertCase(
    user
  )}. Your defeat &#128532;</p>`;
  const roundStatus = document.getElementById(user);
  roundStatus.classList.add("losingStyles");
  computerScore_span.classList.add("losingStyles");
  setTimeout(() => {
    roundStatus.classList.remove("losingStyles");
    computerScore_span.classList.remove("losingStyles");
  }, 2500);
}

// Drawing condition - handles what happens when the user and computer have same response
function draw(user: string) {
  result_div.innerHTML = `<p>You both chose ${convertCase(
    user
  )}. It's a draw! &#129308;&#129307;</p>`;
  const roundStatus = document.getElementById(user);
  roundStatus.classList.add("drawStyles");
  computerScore_span.classList.add("drawStyles");
  userScore_span.classList.add("drawStyles");

  setTimeout(() => {
    roundStatus.classList.remove("drawStyles");
    computerScore_span.classList.remove("drawStyles");
    userScore_span.classList.remove("drawStyles");
  }, 2500);
}

// Determine game logic
function play(userSelection: string) {
  rounds++
  const computerSelection = getComputerSelection();
  var counter = 4;
  footer.innerHTML = "";
  showRestart(false);
  setInterval(function () {
    counter--;
    if (counter >= 0) {
      showCountdown(true);
      countdownInner.innerHTML = `<p>RESULT IN ${counter}...</p>`;
    }
    if (counter === 0) {
      showCountdown(false);
      clearInterval(counter);
      switch (userSelection + computerSelection) {
        case "paperrock":
        case "rockscissors":
        case "scissorspaper":
          victory(userSelection, computerSelection);
          break;
        case "rockpaper":
        case "scissorsrock":
        case "paperscissors":
          defeat(userSelection, computerSelection);
          break;
        case "rockrock":
        case "scissorsscissors":
        case "paperpaper":
          draw(userSelection);
          break;
        default:
          return alert("No user choice has been entered");
      }
      footer.innerHTML = `<p>FEELING LUCKY? CONTINUE PLAYING ROUND ${rounds}</p>`;
      userScore + computerScore === 0 ? showRestart(false) : showRestart(true) 
    }
  }, 800);
}

function showCountdown(show: boolean) {
  show ? countdown.classList.add("show") : countdown.classList.remove("show");
}

function showRestart(show: boolean) {
  show ? restart_div.classList.add("show") : restart_div.classList.remove("show");
}

function restart() {
  // Setting values
  userScore = 0;
  computerScore = 0;
  rounds = 1;
  userScore_span.innerHTML = "0";
  computerScore_span.innerHTML = "0";
  result_div.innerHTML = `<p>SELECT YOUR FIRST MOVE</p>`;
  footer.innerHTML = ``;
  restart_div.classList.remove("show")
}

// Add event listeners to the html elements
// and pass the values of those elements to the play function
function main() {
  rock_div.addEventListener("click", () => play("rock"));
  paper_div.addEventListener("click", () => play("paper"));
  scissors_div.addEventListener("click", () => play("scissors"));
  restart_div.addEventListener("click", () => restart());
}

// Run main function
main();

