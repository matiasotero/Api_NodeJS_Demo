const express  = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('[GET]Saludos desde express');
});

app.post('/', function(req, res){
    res.send('[POST] Saludos desde express.');
});

app.listen(3000, () => {
    console.log("El servidor está inicializando en el puerto 3000.");
});