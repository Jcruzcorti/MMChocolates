// Inicio de Javascript


alert("A continuación si así lo deseas, podrás realizar tu pedido");

const btn = document.getElementById ("botoncontacto1")

let input = document.getElementById ("entrada")

let datos1 = document.getElementById ("input1")
let datos2 = document.getElementById ("input2")
let datos3 = document.getElementById ("input3")

btn.addEventListener("click", () => {
    console.log(datos1.value)
    console.log(datos2.value)
    console.log(datos3.value)
    
    console.log("El pedido del cliente es: " + input.value);
    alert("cree este alert por que al apretar el boton enviar, se actualizaba instantáneamente la página y no dejaba ver el contenido")
})



// --------

// A continuación, se verán los datos del primer pedido:
localStorage.setItem("pedido",new Date()) 

let primerPedido = localStorage.getItem("pedido")

let jsonVariable = JSON.stringify(primerPedido)

console.log(jsonVariable);









