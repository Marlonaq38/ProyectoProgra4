function comprar(){
    Swal.fire({
        title: 'Estas por ejecutar una compra!',
        text: 'Esta seguro que desea comprar este articulo ?',
        icon: 'warning',
        confirmButtonText: 'Aceptar',
        showCancelButton: true,
        cancelButtonAriaLabel: "No"
      })
    .then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Muchas Gracias!", "", "success");
        } 
      });
}

