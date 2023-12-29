document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    const formData = new FormData(form); // Obtén datos del formulario
    const jsonData = {};

    // Convierte FormData a objeto JSON
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    console.log(jsonData);

    // Realiza la solicitud POST al método 'download'
    fetch('http://localhost:3000/download', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonData)
    })
      .then(response => response.json())
      .then(data => {
        // Maneja la respuesta del servidor aquí
        console.log('Respuesta del servidor:', data);
        // Puedes realizar acciones adicionales si es necesario
      })
      .catch(error => {
        // Maneja los errores aquí
        console.error('Error al enviar formulario:', error);
      });
  });
});
