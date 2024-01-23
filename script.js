// Declaration
"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1,
  score = 20,
  highscore = 0;

// Function Declaration
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// Check Btn Event Handler
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // If Wrong Number
  if (!guess) {
    displayMessage("⛔ No Number");
  }
  // If Correct Number
  else if (guess == secretNumber) {
    displayMessage("🎉 Correct Number");

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    // Highscore Implementation
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // Guess is Wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too High" : "📉 Too Low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Again Btn Event Hanlder
document.querySelector(".again").addEventListener("click", function () {
  // Score Reset
  score = 20;
  document.querySelector(".score").textContent = score;

  // Message Reset
  displayMessage("Start guessing...");

  // Guess Reset
  document.querySelector(".guess").value = "";

  // Background & Width Reset
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";

  // Secret Number Reset
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = secretNumber;
  document.querySelector(".number").textContent = "?";
});
