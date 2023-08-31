function getPlayerChoice()
{
    let playerChoice = prompt("Write your choice?");
    playerchoice = playerChoice.toLowerCase;
    if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors")
    {
        return playerChoice;
    }
    else 
    {
        console.log("invalid input");
        return;
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice(){
    let computerChoice = getRandomInt(1,3);
    if (computerChoice == 1)
    {
        computerChoice = "rock";
    }
    else if (computerChoice == 2)
    {
        computerChoice = "paper";
    }
    else 
    {
        computerChoice = "scissors";
    }

    return computerChoice;
}

let playerChoice= getPlayerChoice();
if(playerChoice == undefined)
{
    console.log("Invalid")
}
else
{
    console.log(playerChoice);
}
console.log(getComputerChoice());