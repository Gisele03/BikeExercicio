function ModalSuccess(){
    Swal.fire({
        text: "Item adicionado ao carrinho",
        icon: "success"
      });      
}

function ModalWarning(){
    Swal.fire({
        text: "Deseja finalizar compra?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Compra finalizada",
            icon: "success"
          });
        }
      });
}

