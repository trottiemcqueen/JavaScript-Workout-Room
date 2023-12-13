function computerMove() {
  if (computerMove === 'rock') {
      displayMove() = 'A tie.';
    } else if (computerMove === 'paper') {
      displayMove() = 'You lose.';
    } else if (computerMove === 'scissors') {
      displayMove() = 'You win.';
    }
  };

function randomNumber() {
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove() = 'rock';
      } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove() = 'paper';
      } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove() = 'scissors';
      }
  };

function displayMove() {
  if (computerMove() === 'scissors') {
    alert(`You picked Scissors. Computer picked ${computerMove}. ${displayMove}.`);
  } else if (computerMove() === 'paper') {
    alert(`You picked Paper. Computer picked ${computerMove}. ${displayMove}.`);
  } else if (computerMove() === 'rock') {
    alert(`You picked rock. Computer picked ${computerMove}. ${displayMove}.`);
  }
};