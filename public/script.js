// // public/script.js
// const { electronRequire } = window;

// function addDownloadListener() {
//   const { remote } = electronRequire('electron');
//   const downloadButton = document.getElementById('downloadButton');

//   function handleDownloadClick(event) {
//     event.preventDefault();
//     console.log('Hiciste clic en descargar');

//     // Acceder al módulo 'main' desde el proceso de renderizado
//     const mainProcess = remote.require('./main.js');

//     // Enviar un mensaje al proceso principal
//     mainProcess.handleDownloadRequest({ /* Datos a enviar al servidor */ });
//   }

//   downloadButton.addEventListener('click', handleDownloadClick, false);
// }


document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    const videoUrl = document.querySelector('input[name="videoUrl"]').value;
    const format = document.querySelector('select[name="format"]').value;

    // Crea un objeto FormData para enviar datos del formulario
    const formData = new FormData();
    formData.append('videoUrl', videoUrl);
    formData.append('format', format);

  
// Realiza la solicitud POST al método 'download'
fetch('http://localhost:3000/download', {
  method: 'POST',
  body: formData
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
