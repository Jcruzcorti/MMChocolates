// Inicio de Javascript


alert("A continuación si así lo deseas, podrás realizar tu pedido");

const btn = document.getElementById ("botoncontacto1")

let input = document.getElementById ("entrada")

let datos1 = document.getElementById ("input1")
let datos2 = document.getElementById ("input2")
let datos3 = document.getElementById ("input3")

btn.addEventListener("click", (e)  => {

    e.preventDefault();
    
    console.log(datos1.value)
    console.log(datos2.value)
    console.log(datos3.value)
    
    console.log("El pedido del cliente es: " + input.value);
})



// --------


// Por si me olvido de consultarlo por la plataforma, quería dejarlo en algún lugar: tengo inconvenientes para poder agrander el tamaño del input de comentario (contancto.html). Antes era una etiqueta tipo text area, en vez de input, y estaba perfecto el tamaño del cuadrado, pero al cambiarlo por el input, se hizo pequeño (el tamaño actualmente). Entonces mi duda es no saber como hacer para incrementar el tamaño del input, gracias.



// A continuación, se verán los datos del primer pedido: 


let primerPedido = localStorage.getItem("pedido") || new Date()

primerPedido ? console.log ("La fecha del pedido es: ", primerPedido) : localStorage.setItem("pedido",new Date()) 

let jsonVariable = JSON.stringify(primerPedido)
