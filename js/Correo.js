function calcularEdad(fecha) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    let edad = hoy.getFullYear() - cumpleanos.getFullYear();
    const m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    return edad;
}

function sendEmail() {
    if(document.getElementById('txtNombre').value == "" || document.getElementById('date').value == "" || 
      document.getElementById('txtRango').value == "" || document.getElementById('txtGenero').value == "" || 
      document.getElementById('txtMensaje').value == "" || document.getElementById("txtEmail").value == ""){
        Swal.fire({
          title: "Upppss!",
          text: "Aun hay campos que faltan por llenar!",
          icon: "error"
        });
  
    }else{
        emailjs.send("service_b5t6wij","template_tnl5ij8",{
            from_name: document.getElementById('txtNombre').value,
            to_name: "Marlon",
            old: calcularEdad(document.getElementById('date').value),
            date: new Date(),
            salary: document.getElementById('txtRango').value,
            sex: document.getElementById('txtGenero').value,
            message: document.getElementById('txtMensaje').value,
            sendto: document.getElementById("txtEmail").value
          }).then(function (message) {
            Swal.fire({
              position: "top",
              icon: "success",
              title: "Se ha enviado el mensaje con éxito",
              showConfirmButton: false,
              timer: 2500
            });
          });
    }
    
  }