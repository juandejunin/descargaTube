const express = require('express')
const path = require('path')
const cors = require('cors')
const multer = require('multer')

function createApp () {
  const app = express()
  const port = process.env.PORT || 3000

  const storage = multer.memoryStorage()
  const upload = multer({ storage })

  app.use(upload.any())

  app.use(express.urlencoded({ extended: true }))
  app.use(express.static(path.join(__dirname, 'public')))
  app.use(cors())

  const downloadRoutes = require('./src/routes/downloadRoutes')
  app.use('/', downloadRoutes)

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
  })

  const server = app.listen(port, () => {
    console.log(`Servidor Express iniciado en http://localhost:${port}`)
  })

  return { app, server }
}

module.exports = createApp
