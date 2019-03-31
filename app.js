const express = require('express')
const app     = express()
const hbs     = require('hbs') 
const path    = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
  console.log(req);
})

app.get('/users/:username', (req, res, next) => {
    res.send(req.params);
  })

app.listen(3000, () => console.log('App listening on port 3000!'))