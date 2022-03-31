// Inicio de Javascript

alert("A continuación si así lo deseas, deberás elegir tu pedido");

// objeto producto
class Producto {

    constructor (nombre, peso, producto,){

        this.nombre = nombre;
        this.peso = peso;
        this.producto = producto;


        if ((this.peso=="1/4 kg") || (this.peso=="1/4kg") || (this.peso=="1/4")){
            alert("Tu pedido tiene un valor de $700");
        }
        else if ((this.peso=="1/2 kg") || (this.peso=="1/2kg") || (this.peso=="1/2")){
            alert("Tu pedido tiene un valor de $1400");
        }
        else if ((this.peso=="1 kg") || (this.peso=="1kg") || (this.peso=="1")){
            alert("Tu pedido tiene un valor de $2800");
        }
    }
    

    pedido(){
        return  "Muchas gracias por elegirnos "+ this.nombre + ", su pedido ha sido confirmado. " 
  
      }


    pedido1(){
        return   this.nombre + " = el pedido es " + this.peso + " de bombones " + this.producto + " de rellenos varios." 
      }

}

// primer pedido
let producto1 = new Producto (prompt("Ingresa tu nombre y apellido por favor"), prompt("Ingresa el peso en bombones que quieres adquirir (1/4 kg, 1/2 kg, o 1 kg)"), prompt("Ingresa la variedad de bombones que quieres comprar (semi-amargos, dulces, y/o blancos)"));

for (const productos1 in producto1) {
    console.log(producto1[productos1]);
}

alert(producto1.pedido());
console.log(producto1.pedido1());



// segundo pedido
let producto2 = new Producto (prompt("Ingresa tu nombre y apellido por favor"), prompt("Ingresa el peso en bombones que quieres adquirir (1/4 kg, 1/2 kg, o 1 kg)"), prompt("Ingresa la variedad de bombones que quieres comprar (semi-amargos, dulces, y/o blancos)"));

for (const productos2 in producto2) {
    console.log(producto2[productos2]);
}

alert(producto2.pedido());
console.log(producto2.pedido1());


// ARRAY 
const pedidos = [producto1, producto2];


// nuevo pedido agregado a último momento, con método push
let producto3 = new Producto (prompt("Ingresa tu nombre y apellido por favor"), prompt("Ingresa el peso en bombones que quieres adquirir (1/4 kg, 1/2 kg, o 1 kg)"), prompt("Ingresa la variedad de bombones que quieres comprar (semi-amargos, dulces, y/o blancos)"));

for (const productos3 in producto3) {
    console.log(producto3[productos3]);
}

alert(producto3.pedido());
console.log(producto3.pedido1());




// pusheamos nuevo pedido al array
pedidos.push(producto3);

// método de búsqueda y transformación forEach
pedidos.forEach( (Producto)=> {
    console.log(Producto)
} )

// mostramos por consola todos los pedidos
console.log(pedidos);