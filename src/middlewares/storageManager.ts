import multer from 'multer'

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, __dirname + '/temp')
  },
  filename: function (req, file, callback) {
    const filename = `file_${crypto.randomUUID()}`
    callback(null, filename)
  }
})

const storageManager = multer({
  storage,
  limits: {
    fileSize: 1048576 // 1048576 bytes = 1 Mb
  }
})

export default storageManager
