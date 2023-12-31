// downloadScript.js
function clearUrlInput() {
    document.getElementById('urlInput').value = '';
}


function sendRequest() {
    const form = document.getElementById('downloadForm');
    const formData = new FormData(form);

    fetch('http://localhost:3000/download', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            // Si hay errores de validación, mostrar mensaje al usuario
            showMessage(data.error.message);
        } else {
            // Si no hay errores, mostrar mensaje de éxito
            showMessage('¡Descarga completa!');
            // Borrar la URL del input
            clearUrlInput();
        }
    })
    .catch(error => {
        console.error('Error:', error);
        showMessage('Error al descargar el archivo. Por favor, inténtalo de nuevo.');
    });
    
    
}
