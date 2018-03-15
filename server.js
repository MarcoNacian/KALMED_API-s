//SERVER JS
//paquetes de API 
const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const bodyparser = require('body-parser');

const app = express();

//Puertos 
const port = 8000;

app.use(bodyparser.urlencoded({ extended : true}));

require('./app/routes')(app, {});
app.listen(port, function(){
    console.log('Las apis escuchan por el pueto '+ port)
}); 