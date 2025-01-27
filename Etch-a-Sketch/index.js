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
    let ancho = 100/number;
    number = number**2;
    let color1,color2,color3;
    for (let i = 0; i < number; i++){
        let opacity = 1.0;
        const caja = document.createElement("div");
        caja.style.width = `${ancho}%`;
        caja.style.height = `${ancho}%`;
        color1 = Math.floor(Math.random()*256);
        color2 = Math.floor(Math.random()*256);
        color3 = Math.floor(Math.random()*256);
        caja.style.backgroundColor = `rgb(${color1},${color2},${color3})`;
        caja.classList.toggle("caja");
        caja.addEventListener("mousemove",()=>{
            opacity -= 0.1;
            caja.style.opacity = `${opacity}`;
        })
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

/* Toca ver como bajar la opacidad al hacer hover sobre las casillas, haria falta un hover 
o algo asi */

