/*Vamos a establecer las bases del comportamiento de una 
calculadora:
tendremos que guardar las tres variables es strings
para poder concatenarlas y asi meter numeros de varios digitos asi como decimales
las operaciones solo se añadirán si hay un primer número y las segundas si hay un primero
de tal forma el igual solo si está todo
el signo solo será uno y el resto no valdrá de ponerse a posteriori
solo se podra borrar todo con la C que quitará todo
al introducir cualquier cosa se actualizará la pantalla y creo que ya está


ahora que he avanzado algo me doy cuenta de que esto es horrible, debería haber creado funciones 
a las que llamar con los botones para no repetir lo mismo treinta veces, de los errores se aprende
*/ 

//VARIABLES
const uno = document.querySelector("#uno");
const dos = document.querySelector("#dos");
const tres = document.querySelector("#tres");
const cuatro = document.querySelector("#cuatro");
const cinco = document.querySelector("#cinco");
const seis = document.querySelector("#seis");
const siete = document.querySelector("#siete");
const ocho = document.querySelector("#ocho");
const nueve = document.querySelector("#nueve");
const cero = document.querySelector("#cero");
const suma = document.querySelector("#suma");
const resta = document.querySelector("#resta");
const producto = document.querySelector("#producto");
const division = document.querySelector("#division");
const igual = document.querySelector("#igual");
const punto = document.querySelector("#punto");
const C = document.querySelector("#C");
const pantalla = document.querySelector("#pantalla")

let primerElemento = "";
let segundoElemento = "";
let operando = "";
let operacion;


// LOGICA
// (\(\         (\(\            (\(\
// ( -.-)       ( -.-)          ( -.-)
// o_(")(")     o_(")(")        o_(")(")

// FUNCIONES
// (\(\         (\(\            (\(\
// ( -.-)       ( -.-)          ( -.-)
// o_(")(")     o_(")(")        o_(")(")
function primerElementoVacio(){
    if (primerElemento === "") {
        return true;
    }else{
        return false
    }
}
function segundoElementoVacio(){
    if (segundoElemento === "") {
        return true;
    }else{
        return false
    }
}
function operandoVacio(){
    if (operando === "") {
        return true;
    }else{
        return false
    }
}
// EVENTOS
// (\(\         (\(\            (\(\
// ( -.-)       ( -.-)          ( -.-)
// o_(")(")     o_(")(")        o_(")(")

uno.addEventListener("click",() => {
    if (operandoVacio()) {
        primerElemento += 1;
        operacion = primerElemento;
    }
    else{
        segundoElemento += 1;
        operacion = primerElemento + operando + segundoElemento;
    }
    pantalla.textContent =operacion
})
dos.addEventListener("click",() => {
    if (operandoVacio()) {
        primerElemento += 2;
        operacion = primerElemento;
    }
    else{
        segundoElemento += 2;
        operacion = primerElemento + operando + segundoElemento;
    }
    pantalla.textContent =operacion
})
tres.addEventListener("click",() => {
    if (operandoVacio()) {
        primerElemento += 3;
        operacion = primerElemento;
    }
    else{
        segundoElemento += 3;
        operacion = primerElemento + operando + segundoElemento;
    }
    pantalla.textContent =operacion
})
cuatro.addEventListener("click",() => {
    if (operandoVacio()) {
        primerElemento += 4;
        operacion = primerElemento;
    }
    else{
        segundoElemento += 4;
        operacion = primerElemento + operando + segundoElemento;
    }
    pantalla.textContent =operacion
})
cinco.addEventListener("click",() => {
    if (operandoVacio()) {
        primerElemento += 5;
        operacion = primerElemento;
    }
    else{
        segundoElemento += 5;
        operacion = primerElemento + operando + segundoElemento;
    }
    pantalla.textContent =operacion
})
seis.addEventListener("click",() => {
    if (operandoVacio()) {
        primerElemento += 6;
        operacion = primerElemento;
    }
    else{
        segundoElemento += 6;
        operacion = primerElemento + operando + segundoElemento;
    }
    pantalla.textContent =operacion
})
siete.addEventListener("click",() => {
    if (operandoVacio()) {
        primerElemento += 7;
        operacion = primerElemento;
    }
    else{
        segundoElemento += 7;
        operacion = primerElemento + operando + segundoElemento;
    }
    pantalla.textContent =operacion
})
ocho.addEventListener("click",() => {
    if (operandoVacio()) {
        primerElemento += 8;
        operacion = primerElemento;
    }
    else{
        segundoElemento += 8;
        operacion = primerElemento + operando + segundoElemento;
    }
    pantalla.textContent =operacion
})
nueve.addEventListener("click",() => {
    if (operandoVacio()) {
        primerElemento += 9;
        operacion = primerElemento;
    }
    else{
        segundoElemento += 9;
        operacion = primerElemento + operando + segundoElemento;
    }
    pantalla.textContent =operacion
})
cero.addEventListener("click",() => {
    if (operandoVacio()) {
        primerElemento += 0;
        operacion = primerElemento;
    }
    else{
        segundoElemento += 0;
        operacion = primerElemento + operando + segundoElemento;
    }
    pantalla.textContent =operacion
})
suma.addEventListener("click", () => {
    if (operandoVacio() && !primerElementoVacio() && segundoElementoVacio()) {
        operando = " + ";
        operacion = primerElemento + operando;
        pantalla.textContent = operacion;
    }
})
resta.addEventListener("click", () => {
    if (operandoVacio() && !primerElementoVacio() && segundoElementoVacio()) {
        operando = " - ";
        operacion = primerElemento + operando;
        pantalla.textContent = operacion;
    }
})
producto.addEventListener("click", () => {
    if (operandoVacio() && !primerElementoVacio() && segundoElementoVacio()) {
        operando = " x ";
        operacion = primerElemento + operando;
        pantalla.textContent = operacion;
    }
})
division.addEventListener("click", () => {
    if (operandoVacio() && !primerElementoVacio() && segundoElementoVacio()) {
        operando = " / ";
        operacion = primerElemento + operando;
        pantalla.textContent = operacion;

    }
})

C.addEventListener("click", () => {
    primerElemento = "";
    segundoElemento = "";
    operando = "";
    operacion ="";
    pantalla.textContent = "~";
})

igual.addEventListener("click",() => {
    if (!primerElementoVacio() && !segundoElementoVacio() && !operandoVacio()) {
         primerElemento = parseInt(primerElemento);
         segundoElemento = parseInt(segundoElemento);
         operando = operando.trim();
         switch (operando) {
            case "+":
                primerElemento += segundoElemento;
                pantalla.textContent = Math.round(primerElemento*100)/100;
                segundoElemento = "";
                operando = "";
                break;
            case "-":
                primerElemento -= segundoElemento;
                pantalla.textContent = Math.round(primerElemento*100)/100;
                segundoElemento = "";
                operando = "";
                break;
            case "x":
                primerElemento *= segundoElemento;
                pantalla.textContent = Math.round(primerElemento*100)/100;
                segundoElemento = "";
                operando = "";
                break;
            case "/":
                if (segundoElemento !== 0) {
                    primerElemento /= segundoElemento;
                    pantalla.textContent = Math.round(primerElemento*100)/100;
                    segundoElemento = "";
                    operando = "";
                } else {
                   pantalla.textContent = "No se puede dividir por 0"; 
                   primerElemento = "";
                   segundoElemento = "";
                   operando = "";
                }
                
                break;
         
            default:
                pantalla.textContent = "Operación no válida";
                break;
         }
    }

})