function getUserChoice() {
  userInput = prompt ("Rock, Paper or Scissors?");
  userInput = UserInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' ) {
    return userInput;
  } else {
    console.log('Error! Choose a valid choice!';)
  }
}

function getCOmputerChoice() {
  Math.floor(Math.random() * 3);
  switch (2) {
    case 0:
    return 'rock';
    case 1:
    return 'paper';
    case 2:
    return 'scissors';
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'Tie Game. No winner!';
  }

if (userChoice === 'rock') {
  if (computerChoice === 'scissors') {
  return 'You win!';
} else {
  return 'You Lose!';
  }
}


if (userChoice === 'paper') {
  if (computerChoice === 'rock') {
  return 'You win!';
  }
} else {
  return 'You Lose!';
}

if (userChoice === 'scissors') {
  if (computerChoice === 'paper') {
    return 'You win!';
  }
} else {
  return 'You Lose!';
  }

}

function playGame() {
  var userChoice = getUserChoice;
  var computerChoice = computerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}
playgame();



var userChoice = prompt("Rock, Paper or Scissors?");
var computerChoice = Math.random();
if (computerChoice <0.34) {
  computerChoice = "rock";
} else if(computerChoice <=0.67) {
  computerChoice ="paper";
} else {
  computerChoice = "scissors";
}

var compare = function(choice1,choice2){
  if(userChoice===computerChoice) {
    return "The result is a tie!";
  }
  if (userChoice==="rock"){
    if(computerChoice==="scissors"){
      alert("You Win!");
    } else {
      return "Paper Wins!";
    }
  }

if(userChoice==="paper") {
  if(computerChoice==="rock"){
    alert("You Win!");
  } else {
    return "Scissors Wins!";
  }
}
}
