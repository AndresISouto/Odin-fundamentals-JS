let humanScore = 0;
let computerScore = 0;
let humanChoice = "";

const piedra = document.querySelector("#piedra");
const papel = document.querySelector("#papel");
const tijera = document.querySelector("#tijera");
const eleccion = document.querySelector("#eleccion");
const victoria = document.querySelector("#victoria");
const puntosPJ = document.querySelector("#puntosjugador");
const puntosCPU = document.querySelector("#puntosordenador");


//-----------------------------------------------------------------------


// Asignar eventos correctamente
piedra.addEventListener("click", setPiedra);
papel.addEventListener("click", setPapel);
tijera.addEventListener("click", setTijera);


// Funciones para establecer la elección del humano
function setPiedra() {
    humanChoice = "piedra";
    eleccion.textContent = "El jugador eligio piedra"
    playGame();
}

function setPapel() {
    humanChoice = "papel";
    eleccion.textContent = "El jugador eligio papel"
    playGame();
}

function setTijera() {
    humanChoice = "tijeras";
    eleccion.textContent = "El jugador eligio tijeras"
    playGame();
}


function getComputerChoice(){
    const choices = ["piedra","papel","tijeras"];
    let random = Math.floor(Math.random()*3);
    return choices[random];

}

function playGame(){
    const computerChoice = getComputerChoice();
    
    if (humanChoice === computerChoice) {
        victoria.textContent = "Empate";
    }
    else if (humanChoice === "piedra" && computerChoice === "tijeras" ||
             humanChoice === "papel" && computerChoice === "piedra" ||
             humanChoice === "tijeras" && computerChoice === "papel") {
        victoria.textContent = "Gana el jugador";
        humanScore++;        
        puntosPJ.textContent = `Puntos jugador ${humanScore}`; 
    }
    else{
        victoria.textContent = "Gana la CPU";
        computerScore++;
        puntosCPU.textContent = `Puntos CPU ${computerScore}`;
    }
}

// playGame();

//console.log(`human; ${humanScore} computer: ${computerscore}`);



// function getComputerChoice(){
//     let x = Math.floor((Math.random() * 3) + 1);
    
//     switch(x){
//         case 1: 
//             return "piedra"
//         case 2: 
//             return "papel"
//         case 3: 
//             return "tijera"
//         default: 
//             return "error";
//     }
// }

// function getHumanChoice(){
//     let eleccion = prompt("Elije entre piedra papel o tijera");
//     eleccion = eleccion.toLowerCase();
//     return eleccion;
// }



// function playRound(humanChoice,computerChoice){
//     if(humanChoice==="piedra"){
//         switch(computerChoice){
        
//         case "piedra":
//             console.log("empate");
//             break;
//         case "papel":
//             console.log("piedra pierde a papel");
//             computerscore++;
//             break;
//         case "tijera":
//             console.log("piedra vence a papel");
//             humanScore++;
//             break;
//         default:
//             console.log("nada fue seleccionado")
//             break;
//         }

//     }
//     else if(humanChoice==="papel"){
//         switch(computerChoice){
        
//         case "piedra":
//             console.log("papel vence a piedra");
//             humanScore++;
//             break;
//         case "papel":
//             console.log("empate");
//             break;
//         case "tijera":
//             console.log("papel pierde a tijera");
//             computerscore++;
//             break;
//         default:
//             break;
//         }
//     }
//     else{
        
//         switch(computerChoice){
        
//         case "piedra":
//             console.log("tijera pierde a piedra");
//             computerscore++;
//             break;
//         case "papel":
//             console.log("tijera gana a papel");
//             humanScore++;
//             break;
//         case "tijera":
//             console.log("empate");
//             break;
//         default:
//             break;
//         }

//     }
// }
// function playGame(){
//     for(let i = 0; i <5;i++){
//         playRound(getHumanChoice(),getComputerChoice());
//     }
// }


//
//      (\(\      (\(\      (\(\     (\(\     (\(\       (\(\    
//      ( -.-)    ( -.-)    ( -.-)   ( -.-)   ( -.-)     ( -.-)
//      o_(")(")  o_(")(")  o_(")(") o_(")(") o_(") (") o_(")(")
//