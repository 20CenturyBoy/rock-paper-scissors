
let playerScore = 0;
let computerScore = 0;

function playRound(e){
    let playerChoice = e.target.innerText;
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices.at(Math.floor(Math.random() * choices.length));
    return computerChoice;
    const result = document.querySelector("#resultOfRound");
    const overallResult = document.querySelector("#overallResult");
    if (playerSelection === computerSelection) {
        result.innerText =  "it's a tie replay this round";
      } else if (playerSelection === "rock" && computerSelection === "paper") {
        result.innerText = `You lose! paper beats rock`;
        computerScore += 1;
      } else if (playerSelection === "rock" && computerSelection === "scissors") {
        result.innerText = `You win! rock beats scissors`;
        playerScore += 1;
      } else if (playerSelection === "paper" && computerSelection === "scissors") {
        result.innerText = `You lose!scissors beats paper`;
        computerScore += 1;
      } else if (playerSelection === "paper" && computerSelection === "rock") {
        result.innerText = `You win! paper beats rock`;
        playerScore += 1;
      } else if (playerSelection === "scissors" && computerSelection === "rock") {
        result.innerText = `You lose! rock beats scissors`;
        computerScore += 1;
      } else if (playerSelection === "scissors" && computerSelection === "paper") {
        result.innerText = `You win! scissors beats paper`;
        playerScore += 1;
      }
      overallResult.innerText = `Your score is: ${playerScore}   Computers Score is: ${computerScore}`;
      if (playerScore > 5)
      {
        overallResult.innerText = "You won!";
      }
      if (computerScore > 5)
      {
        overallResult.innerText = "You lost computer won!"
      }
}


const buttons = document.querySelectorAll('button');
buttons.forEach((item) => {
    item.addEventListener('click', (e) => {
        let playerSelection = e.target.innerText;
        playerSelection = playerSelection.toLowerCase();
        let choices = ["rock", "paper", "scissors"];
        let computerSelection = choices.at(Math.floor(Math.random() * choices.length));
        const result = document.querySelector("#resultOfRound");
        const overallResult = document.querySelector("#overallResult");
        if (playerSelection === computerSelection) {
            result.innerText =  "it's a tie replay this round";
          } else if (playerSelection === "rock" && computerSelection === "paper") {
            result.innerText = `You lose! paper beats rock`;
            computerScore += 1;
          } else if (playerSelection === "rock" && computerSelection === "scissors") {
            result.innerText = `You win! rock beats scissors`;
            playerScore += 1;
          } else if (playerSelection === "paper" && computerSelection === "scissors") {
            result.innerText = `You lose!scissors beats paper`;
            computerScore += 1;
          } else if (playerSelection === "paper" && computerSelection === "rock") {
            result.innerText = `You win! paper beats rock`;
            playerScore += 1;
          } else if (playerSelection === "scissors" && computerSelection === "rock") {
            result.innerText = `You lose! rock beats scissors`;
            computerScore += 1;
          } else if (playerSelection === "scissors" && computerSelection === "paper") {
            result.innerText = `You win! scissors beats paper`;
            playerScore += 1;
          }
          overallResult.innerText = `Your score is: ${playerScore}   Computers Score is: ${computerScore}`;
          if (playerScore > 5)
          {
            overallResult.innerText = "You won!";
          }
          if (computerScore > 5)
          {
            overallResult.innerText = "You lost computer won!"
          }
    } )});
