const contenedor = document.querySelector(".container");
const boton = document.querySelector("button");
//  (\(\
//  ( -.-)  
//  o_(")(")
//  (\(\
//  ( -.-)  
//  o_(")(")
function grid(number){
    number = parseInt(number);
    // const ancho = Math.floor(100/number);
    ancho = 100/number;
    number = number**2;
    for (let i = 0; i < number; i++){
        const caja = document.createElement("div");
        caja.classList.toggle("caja");
        caja.style.width = `${ancho}%`
        caja.style.height = `${ancho}%`
        contenedor.appendChild(caja); 
    }

}

boton.addEventListener("click",()=>{
    const numero = prompt("lado del grid");
    const gridAnterior = document.querySelectorAll(".caja");
    for (let i = 0; i < gridAnterior.length; i++) {
        gridAnterior[i].remove();
    }
    grid(numero);
})


