

function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    if (choice == 0){
        return "Rock"
    } 
    else if (choice == 1){
        return "Paper"
    } 
    else{
        return "Scissors"
    }
}

function getPlayerChoice() {
    while (true){
        let choice = prompt('Chose rock paper or scissors').toLowerCase()
        if (choice == "rock"){
            return "Rock"
        } 
        else if (choice == "paper"){
            return "Paper"
        } 
        else if (choice == "scissors"){
            return "Scissors"
        }
        else{
            console.log("Invalid input, please try again.")
        }
    }
}

function playRound(playerSelection,computerSelection){
    if (playerSelection == computerSelection){
        console.log('Draw.')
        return 'Draw.'
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Paper" ||playerSelection == "Paper" && computerSelection == "Rock" ){
        console.log(`Player won the round! ${playerSelection} beats ${computerSelection}.`)
        return `Player won the round! ${playerSelection} beats ${computerSelection}.`
    }
    else{
        console.log(`Computer won the round! ${computerSelection} beats ${playerSelection}.`)
        return `Computer won the round! ${computerSelection} beats ${playerSelection}.`
    }
}

function game(){
    let playerScore = 0
    let computerScore = 0
    while(playerScore+computerScore < 5){
        let result = playRound(getPlayerChoice(),getComputerChoice()).trim().split(' ')
        if(result[0] == "Computer"){
            computerScore++;
        }
        else if(result[0] == "Player"){
            playerScore++;
        }
        else{
            playerScore = playerScore + 0.5
            computerScore = computerScore + 0.5
        }
    }
    if (computerScore <playerScore){
        return "Player won the game!"
    }
    else if (playerScore <computerScore){
        return "Computer won the game!"
    }
    else{
        return "Draw!";
    }
}

console.log(game())