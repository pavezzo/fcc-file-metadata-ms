var express = require('express')
var multer = require('multer')

var storage = multer.memoryStorage()
var upload = multer({ storage: storage })

var app = express()

app.get('/', function(req, res) {
    res.sendFile(process.cwd() + '/index.html')
})

app.post('/filesize', upload.single('file'), function(req, res) {
    res.json({ size: req.file.size })
})

app.listen(8000 || process.env.PORT)
