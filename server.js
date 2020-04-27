const express = require('express')
const app = express()
const routes = require('./routes/');
const port = 3000

app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use('/', routes);

app.listen(port, () => console.log(`listening at http://localhost:${port}...`))