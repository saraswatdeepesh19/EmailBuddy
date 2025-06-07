function playGame(choice) {
  console.log("Game started with choice:", choice);
  // Your game logic here

  const choices = ["rock", "paper", "scissor"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log("Computer choice:", computerChoice);
  let result = "";
  if (choice === computerChoice) {
    result = "It's a tie! Computer choose " + computerChoice;
  } else if (
    (choice === "rock" && computerChoice === "scissor") ||
    (choice === "paper" && computerChoice === "rock") ||
    (choice === "scissor" && computerChoice === "paper")
  ) {
    result = "You win! Computer choose " + computerChoice;
  } else {
    result = "You lose! Computer choose " + computerChoice;
  }

  document.getElementById("result").textContent =
    result.charAt(0).toUpperCase() + result.slice(1);
}

document.getElementById("rock").addEventListener("click", function () {
  playGame("rock");
});
document.getElementById("paper").addEventListener("click", function () {
  playGame("paper");
});
document.getElementById("scissor").addEventListener("click", function () {
  playGame("scissor");
});
