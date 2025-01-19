let humanScore = 0;
let computerscore = 0;

playGame();

console.log(`human; ${humanScore} computer: ${computerscore}`);



function getComputerChoice(){
    let x = Math.floor((Math.random() * 3) + 1);
    
    switch(x){
        case 1: 
            return "piedra"
        case 2: 
            return "papel"
        case 3: 
            return "tijera"
        default: 
            return "error";
    }
}

function getHumanChoice(){
    let eleccion = prompt("Elije entre piedra papel o tijera");
    eleccion = eleccion.toLowerCase();
    return eleccion;
}
function playRound(humanChoice,computerChoice){
    if(humanChoice==="piedra"){
        switch(computerChoice){
        
        case "piedra":
            console.log("empate");
            break;
        case "papel":
            console.log("piedra pierde a papel");
            computerscore++;
            break;
        case "tijera":
            console.log("piedra vence a papel");
            humanScore++;
            break;
        default:
            break;
        }

    }
    else if(humanChoice==="papel"){
        switch(computerChoice){
        
        case "piedra":
            console.log("papel vence a piedra");
            humanScore++;
            break;
        case "papel":
            console.log("empate");
            break;
        case "tijera":
            console.log("papel pierde a tijera");
            computerscore++;
            break;
        default:
            break;
        }
    }
    else{
        
        switch(computerChoice){
        
        case "piedra":
            console.log("tijera pierde a piedra");
            computerscore++;
            break;
        case "papel":
            console.log("tijera gana a papel");
            humanScore++;
            break;
        case "tijera":
            console.log("empate");
            break;
        default:
            break;
        }

    }
}
function playGame(){
    for(let i = 0; i <5;i++){
        playRound(getHumanChoice(),getComputerChoice());
    }
}