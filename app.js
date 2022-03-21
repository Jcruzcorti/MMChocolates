// Inicio de Javascript

alert("A continuación si así lo deseas, deberás elegir tu pedido");

class Producto {

    constructor (nombre, peso, producto,){

        this.nombre = nombre.toUpperCase();
        this.peso = peso.toLowerCase();
        this.producto = producto.toLowerCase();


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
      return  "Muchas gracias por elegirnos "+ this.nombre + ", tu pedido es " + this.peso + " de bombones " + this.producto + " de rellenos varios." + " Aprieta aceptar para confirmar, o actualiza la página para empezar de nuevo.";

    }

}

let producto1 = new Producto (prompt("Ingresa tu nombre y apellido por favor"), prompt("Ingresa el peso en bombones que quieres adquirir (1/4 kg, 1/2 kg, o 1 kg)"), prompt("Ingresa la variedad de bombones que quieres comprar (semi-amargos, dulces, y/o blancos)"));

for (const productos in producto1) {
    console.log(producto1[productos]);
}

alert(producto1.pedido());

