//SERVER JS

const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const bodyparser = require('body-parser');

const app = express();
const port = 8000;

app.listen(port, function(){
    console.log('Las apis escuchan por el pueto '+ port)
}); 