// Inicio de Javascript


Swal.fire({
    title: "MM Chocolates",
    text: "A continuación si así lo deseas, podrás realizar tu pedido",
    confirmButtonText: "Aceptar",
  });
  
  
  
  // --------
  
  
  let primerPedido = localStorage.getItem("pedido") || new Date()
  
  primerPedido ? console.log ("La fecha del pedido es: ", primerPedido) : localStorage.setItem("pedido",new Date()) 
  
  let jsonVariable = JSON.stringify(primerPedido)
  
  
  
  // --------
  
  
  
  const btn = document.getElementById('botoncontacto1');
  
  document.getElementById('form')
   .addEventListener('submit', function(event) {
     event.preventDefault();
  
     btn.value = 'Enviando mensaje...';
  
     const serviceID = 'default_service';
     const templateID = 'template_evfkc1n';
  
     emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Enviar mensaje';
        Swal.fire({
                  position: "top-end", 
                  icon: "success",
                  title: "Su mensaje ha sido enviado",
                  showConfirmButton: false,
                  timer: 3000
                })
            
      }, (err) => {
        btn.value = 'Enviar mensaje';
        
        alert(JSON.stringify(err));
      });

   

    })
