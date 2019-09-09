//Require express framework from our npm.
const express_app = require ("express");
// Create a local variable to use all the stuff of express 
var app = express_app();

//Request the web Inicio on the route "/" and uses the function inicio.
app.get('/', inicio);
app.get('/cursos', cursos);


//Function that sends the parameter resultado to a string on our site.
function inicio(peticion, resultado)
{
  resultado.send("Este es el <strong> home </strong>")
}

function cursos(peticion, resultado)
{
  resultado.send("Estos son los <strong> cursos </strong>")
}


//OPen our app on the port 8989
app.listen(8989);

