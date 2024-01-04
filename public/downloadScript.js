// // downloadScript.js
// function clearUrlInput() {
//     document.getElementById('urlInput').value = '';
// }


// function sendRequest() {
//     const form = document.getElementById('downloadForm');
//     const formData = new FormData(form);

//     fetch('http://localhost:3000/download', {
//         method: 'POST',
//         body: formData
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.error) {
//             // Si hay errores de validación, mostrar mensaje al usuario
//             showMessage(data.error.message);
//         } else {
//             // Si no hay errores, mostrar mensaje de éxito
//             showMessage('¡Descarga completa!');
//             // Borrar la URL del input
//             clearUrlInput();
//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         showMessage('Error al descargar el archivo. Por favor, inténtalo de nuevo.');
//     });
    
    
// }
function clearUrlInput() {
    document.getElementById('urlInput').value = '';
}

function showMessage(message) {
    // Muestra el mensaje de error en tu contenedor de mensajes
    document.getElementById('messageContainer').innerHTML = `<h1>${message}</h1>`;
}

function sendRequest() {
    const form = document.getElementById('downloadForm');
    const formData = new FormData(form);

    fetch('http://localhost:3000/download', {
        method: 'POST',
        body: formData,
    })
        .then((response) => {
            // Verificar si la respuesta es exitosa (status 2xx)
            if (response.ok) {
                // Descarga exitosa
                showMessage('¡Descarga completa!');
                // Limpiar el input después de la descarga
                clearUrlInput();
            } else {
                // Descarga fallida, mostrar mensaje de error según el código de estado
                showMessage(`Error al descargar el archivo. Código de estado: ${response.status}`);
            }
        })
        .catch((error) => {
            // Capturar otros errores de la solicitud
            console.error('Error:', error);
            showMessage('Error al descargar el archivo. Por favor, inténtalo de nuevo.');
        });
}
