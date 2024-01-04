function clearUrlInput () {
  document.getElementById('urlInput').value = ''
}

function showMessage (message) {
  document.getElementById('messageContainer').innerHTML = `<h1>${message}</h1>`
}

function sendRequest () {
  const form = document.getElementById('downloadForm')
  const formData = new FormData(form)

  fetch('http://localhost:3000/download', {
    method: 'POST',
    body: formData
  })
    .then((response) => {
      if (response.ok) {
        showMessage('¡Descarga completa!')

        clearUrlInput()
      } else {
        showMessage(`Error al descargar el archivo. Código de estado: ${response.status}`)
      }
    })
    .catch((error) => {
      console.error('Error:', error)
      showMessage('Error al descargar el archivo. Por favor, inténtalo de nuevo.')
    })
}
