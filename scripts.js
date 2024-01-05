

let playerScore = 0
let computerScore = 0
let choice = ""
let btnRock = document.querySelector('.rock')

let resultText = document.querySelector('.result')

let scoreText = document.querySelector('.score')

btnRock.addEventListener('click', function() {
    if( playerScore+computerScore <5){
        choice = "Rock"
        resultText.textContent = game(choice)
        scoreText.textContent = `Player ${playerScore} | Computer ${computerScore}.`
        if( playerScore+computerScore == 5){
        resultText.textContent = 'Game ended'
        }
    }
});

let btnPaper = document.querySelector('.paper')
btnPaper.addEventListener('click', function() {
    if( playerScore+computerScore <5){
        choice = "Paper"
        resultText.textContent = game(choice)
        scoreText.textContent = `Player ${playerScore} | Computer ${computerScore}.`
        if( playerScore+computerScore == 5){
        resultText.textContent = 'Game ended'
        }
    }
});

let btnScissors = document.querySelector('.scissors')
btnScissors.addEventListener('click', function() {
    if( playerScore+computerScore <5){
        choice = "Scissors"
        resultText.textContent = game(choice)
        scoreText.textContent = `Player ${playerScore} | Computer ${computerScore}.`
        if( playerScore+computerScore == 5){
        resultText.textContent = 'Game ended'
        }
    }
});
       
        


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

function game(playerChoice){

    let result = playRound(playerChoice,getComputerChoice()).trim().split(' ')
    if(result[0] == "Computer"){
        computerScore++;
        console.log(`Score:\n Player ${playerScore} | Computer ${computerScore}.`);
        return 'player'
    }
    else if(result[0] == "Player"){
        playerScore++;
        console.log(`Score:\n Computer ${computerScore} | Player ${playerScore}.`);
        return 'computer'
    }
    else{
        playerScore = playerScore + 0.5
        computerScore = computerScore + 0.5
        console.log(`Score:\n Player ${playerScore} | Computer ${computerScore}.`);
        return 'draw'
        
    }
}
//comentario

