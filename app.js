const express = require('express')
const app     = express()
const hbs     = require('hbs') 
const path    = require('path');
const countries = require('./countries.json');
console.log(countries);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/countries', (req, res, next) => {




  res.json(countries);

});


app.get('/countries/:code', (req, res, next) => {
 
  const code=req.params.code;
  const getCountry = (code) => {
    const theCountry = oneCountry => {
      return oneCountry.cca3 === code;
    }
    return countries.find(theCountry)
  };
  const foundCountry=[];
  foundCountry.push(getCountry(code,10));

    res.json(foundCountry);
  
  });

app.get('/search', (req, res, next) => {
    
  
  res.send(req.query);


  });

app.listen(3001, () => console.log('App listening on port 3000!'))