var express = require('express')
var app = express()
var port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => console.log(`listening at http://localhost:${port}...`))