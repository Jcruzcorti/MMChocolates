// Inicio de Javascript

// alert("A continuación si así lo deseas, deberás elegir tu pedido");

// objeto producto
// class Producto {

//     constructor (nombre, peso, producto,){

//         this.nombre = nombre;
//         this.peso = peso;
//         this.producto = producto;


//         if ((this.peso=="1/4 kg") || (this.peso=="1/4kg") || (this.peso=="1/4")){
//             alert("Tu pedido tiene un valor de $700");
//         }
//         else if ((this.peso=="1/2 kg") || (this.peso=="1/2kg") || (this.peso=="1/2")){
//             alert("Tu pedido tiene un valor de $1400");
//         }
//         else if ((this.peso=="1 kg") || (this.peso=="1kg") || (this.peso=="1")){
//             alert("Tu pedido tiene un valor de $2800");
//         }
//     }
    

//     pedido(){
//         return  "Muchas gracias por elegirnos "+ this.nombre + ", su pedido ha sido confirmado. " 
  
//       }


//     pedido1(){
//         return   this.nombre + " = el pedido es " + this.peso + " de bombones " + this.producto + " de rellenos varios." 
//       }

// }



// // primer pedido
// let producto1 = new Producto (prompt("Ingresa tu nombre y apellido por favor"), prompt("Ingresa el peso en bombones que quieres adquirir (1/4 kg, 1/2 kg, o 1 kg)"), prompt("Ingresa la variedad de bombones que quieres comprar (semi-amargos, dulces, y/o blancos)"));


// // función
// function Iterador(producto1){

// 	for(let productos1 in producto1){

// 		console.log(producto1[productos1])

// 	}

// }

// Iterador(producto1)

// alert(producto1.pedido());

// // segundo pedido
// let producto2 = new Producto (prompt("Ingresa tu nombre y apellido por favor"), prompt("Ingresa el peso en bombones que quieres adquirir (1/4 kg, 1/2 kg, o 1 kg)"), prompt("Ingresa la variedad de bombones que quieres comprar (semi-amargos, dulces, y/o blancos)"));


// // función
// function Iterador(producto2){

// 	for(let productos2 in producto2){

// 		console.log(producto2[productos2])

// 	}

// }

// Iterador(producto2)


// alert(producto2.pedido());



// // ARRAY 
// const pedidos = [producto1, producto2];


// // nuevo pedido agregado a último momento, con método push
// let producto3 = new Producto (prompt("Ingresa tu nombre y apellido por favor"), prompt("Ingresa el peso en bombones que quieres adquirir (1/4 kg, 1/2 kg, o 1 kg)"), prompt("Ingresa la variedad de bombones que quieres comprar (semi-amargos, dulces, y/o blancos)"));


// // función
// function Iterador(producto3){

// 	for(let productos3 in producto3){

// 		console.log(producto3[productos3])

// 	}

// }


// Iterador(producto3)



// // pusheamos nuevo pedido al array
// pedidos.push(producto3);

// // método de búsqueda y transformación forEach
// pedidos.forEach( (Producto)=> {
//     console.log(Producto)
// } )

// // mostramos por consola todos los pedidos
// console.log(pedidos);



// ---------



// let boton = document.getElementsByClassName("botoncontacto1");

// let entrada = document.getElementsById("textinput");

// entrada.oninput = () => {}



// // let datos = document.getElementsByClassName("input1");

// // datos.oninput = () => {}

// boton[0].addEventListener("click", respuestaAlClick)
// function respuestaAlClick() {
//     console.log("funciona");
//     alert(entrada.value);
//     // alert(datos.value)
    
// }


// ----



// let input1  = document.getElementById("textinput")

// input1.addEventListener("input", () => {
//      console.log(input1.value)
// })



// let input  = document.getElementById("nombre")
// input.addEventListener("input", () => {
//      alert(input.value)
// })



// let input2  = document.getElementById("apellido")
// input2.addEventListener("input", () => {
//      alert(input2.value)
// })



// let input3  = document.getElementById("mail")
// input3.addEventListener("input", () => {
//     alert(input3.value)
// })



// let boton = document.getElementsByClassName("botoncontacto1")

//     boton[0].addEventListener("click", respuestaClick)
//     function respuestaClick(){
//         alert("Respuesta evento");
//     }




const btn = document.getElementById ("botoncontacto1")

let input = document.getElementById ("entrada")

let datos1 = document.getElementById ("input1")
let datos2 = document.getElementById ("input2")
let datos3 = document.getElementById ("input3")

btn.addEventListener("click", () => {
    console.log(datos1.value)
    console.log(datos2.value)
    console.log(datos3.value)
    console.log("El comentario del cliente es: " + input.value);
    alert("cree este alert por que al apretar el boton enviar, se actualizaba instantáneamente la página y no dejaba ver el contenido")
})


