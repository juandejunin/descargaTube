// downloadRoutes.js
const express = require('express');
const router = express.Router();
const path = require('path');

const downloadController = require('../controller/downloadController');

// downloadRoutes.js
// ...

// Ruta para la descarga real
router.post('/download', async (req, res) => {
  const videoUrl = req.body.videoUrl;
  const outputDir = downloadController.getDefaultDownloadDir();
  const selectedFormat = req.body.format || 'mp4'; // Si no se selecciona un formato, usa mp4 por defecto

  try {
    const cleanTitle = await downloadController.obtenerTituloLimpiado(videoUrl);
    const fileName = await downloadController.descargarFormato(videoUrl, cleanTitle, outputDir, selectedFormat);

    const filePath = path.join(outputDir, fileName);
    res.download(filePath, fileName, (err) => {
      if (err) {
        console.error('Error al enviar el archivo:', err);
        res.status(500).send('Error al enviar el archivo.');
      }
    });
  } catch (error) {
    console.error('Error en la descarga de video:', error);
    res.status(500).send('Error en la descarga de video.');
  }
});


module.exports = router;
