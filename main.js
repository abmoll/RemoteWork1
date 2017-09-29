console.log('this seems to work');

let choices = ['rock', 'paper', 'scissors'];

let index = Math.floor(Math.random()*3);
console.log(index);
let compChoice = choices[index];
//test
console.log(compChoice);
let userChoice;
let paragraph = document.getElementById("result");
let compWins = 0;
let yourWins = 0;

//user chooses rock
let rock = document.getElementById("rock");
rock.addEventListener("click", function(){
  userChoice="rock";
  if (compChoice === userChoice) {
    alert("Draw! You and the computer chose the same thing. Choose again.");
  }
  else if (compChoice === "paper") {
    alert("Computer chose paper and you chose rock. His paper covers your rock. Sorry, you lose :(");
    addCompWins();
    //compWins++;
    //paragraph.innerHTML="Computer:" + compWins + " You: " + yourWins;

  }
  else if (compChoice === "scissors") {
    alert("Computer: \tScissors \nYou: \t\tRock \nHis scissors are smashed by your rock. You win!");
    addYourWins();
      // yourWins++;
      // paragraph.innerHTML="Computer:" + compWins + " You: " + yourWins;
  }
});

//user chooses paper
let paper = document.getElementById("paper");
paper.addEventListener("click", function(){
  userChoice="paper";
  if (compChoice === userChoice) {
    alert("Draw! You and the computer chose the same thing. Choose again.");
  }
  else if (compChoice === "rock") {
    alert("Computer chose rock and you chose paper. His rock is covered by your paper. You win!");
    addYourWins();
  }
  else if (compChoice === "scissors") {
    alert("Computer chose scissors and you chose paper. His scissors cut your paper. Sorry, you lose :(");
    addCompWins();
  }
});

//user chooses scissors
let scissors = document.getElementById("scissors");
scissors.addEventListener("click", function(){
  userChoice="scissors";
  if (compChoice === userChoice) {
    alert("Draw! You and the computer chose the same thing. Choose again.");
  }
  else if (compChoice === "rock") {
    alert("Computer chose rock and you chose scissors. His rock smashes your scissors. Sorry, you lose :(");
    addCompWins();
  }
  else if (compChoice === "paper") {
    alert("Computer chose paper and you chose scissors. His paper is cut by your scissors. You win!");
    addYourWins();
  }
});

function addCompWins() {
  compWins++;
  paragraph.innerHTML="Computer: " + compWins + " You: " + yourWins;
}

function addYourWins() {
  yourWins++;
  paragraph.innerHTML="Computer: " + compWins + " You: " + yourWins;
}

// if (compChoice === "rock" && userChoice === "paper") {
//   paragraph.innerHTML="Computer chose rock. Paper covers rock. You win.";
// }
// else if (compChoice === "rock" && userChoice === "scissors") {
//   paragraph.innerHTML="Computer chose rock. Rock smashes scissors. You lose.";
// }
// else if (compChoice === "paper" && userChoice === "scissors") {
//   paragraph.innerHTML="Computer chose paper. Paper is cut by scissors. You win.";
// }
