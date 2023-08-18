document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", handleSubmit);
  });
  
  function handleSubmit(event) {
    event.preventDefault();
  
    const idHotel = document.querySelector('input[name="idHotel"]').value;
    const nombre = document.querySelector('input[name="Nombre"]').value;
    const apellido = document.querySelector('input[name="Apellido"]').value;
    const habitacion = document.querySelector('input[name="numeroHabitacion"]').value;

    


    if (idHotel > 5) {
      alert("No existe dicho hotel");
      return; // Detener la ejecución del código si el vuelo no existe
    }
    else if (idHotel < 1) {
      alert("No existe dicho hotel");
      return; // Detener la ejecución del código si el vuelo no existe
    }
  
    const data = {
        nombre: nombre,
        apellido: apellido,
        numeroHabitacion: habitacion,
    };
  
    const url = `https://localhost:7263/HotelControlador/ReservaHotel?idHotel=${idHotel}`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };
  
    fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error("Error en la solicitud: " + response.status);
      }
      return response.json();
    })
    .then(data => {
      alert("Reserva exitosa, revisa descargas");
      console.log(data);
    })
    .catch(error => {
      alert("No se pudo completar la reserva: " + error.message);
      console.error(error);
    });
  
  }
  