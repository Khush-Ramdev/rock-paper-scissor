const option = ["rock", "paper", "scissor"];

const btn = document.querySelectorAll("button");
const text = document.querySelector(".text");
let computerScore = document.querySelector(".computer-score");
let userScore = document.querySelector(".user-score");

const randomSelect = () => {
  return option[Math.floor(Math.random() * option.length)];
};

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    if (userScore.innerText >= "5") {
      alert("you win");
      location.reload();
    }

    if (computerScore.innerText >= "5") {
      alert("computer wins");
      location.reload();
    }
    const comp = randomSelect();
    if (btn[i].value == "Rock") {
      console.log(comp);
      if (comp == "rock") {
        text.innerHTML = "<h3>Rock vs Rock, Its a draw</h3>";
      } else if (comp == "paper") {
        text.innerHTML = "<h3>Rock vs Paper, Computer Wins</h3>";
        computerScore.innerHTML = parseInt(computerScore.innerText) + 1;
      } else {
        text.innerHTML = "<h3>Rock vs Scissor, You Win</h3>";
        userScore.innerHTML = parseInt(userScore.innerText) + 1;
      }
    } else if (btn[i].value == "Paper") {
      if (comp == "rock") {
        text.innerHTML = "<h3>Paper vs Rock, You Win</h3>";
        userScore.innerHTML = parseInt(userScore.innerText) + 1;
      } else if (comp == "paper") {
        text.innerHTML = "<h3>Paper vs Paper, Its a draw</h3>";
      } else {
        text.innerHTML = "<h3>Paper vs Scissor, Computer Wins</h3>";
        computerScore.innerHTML = parseInt(computerScore.innerText) + 1;
      }
    } else {
      if (comp == "rock") {
        text.innerHTML = "<h3>Scissor vs Rock, Computer Wins</h3>";
        computerScore.innerHTML = parseInt(computerScore.innerText) + 1;
      } else if (comp == "paper") {
        text.innerHTML = "<h3>Scissor vs Paper, You Win</h3>";
        userScore.innerHTML = parseInt(userScore.innerText) + 1;
      } else {
        text.innerHTML = "<h3>Scissor vs Scissor, Its a draw</h3>";
      }
    }
  });
}
