//Require express framework from our npm.
const express_app = require ("express");
// Instance a local variable to use all the stuff of express 
var app = express_app();

app.get('/', inicio);
app.get('/cursos', cursos);

function inicio(peticion, resultado)
{
  resultado.send("Este es el <strong> home </strong>")
}

function cursos(peticion, resultado)
{
  resultado.send("Estos son los <strong> cursos </strong>")
}

app.listen(8989);

