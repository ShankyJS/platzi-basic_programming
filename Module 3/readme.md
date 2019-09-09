# Fizz Buzz Exercise.

## Description

*[] If a number can be divided by 3 we are going to write Fizz
*[] If the number can be divided by 5 we are going to write Buzz
*[]If a number can by divided by both we are going to write Fizz Buzz

## Algorithm 

4 / 3 = 1.33 ~ (You cannot divide it.)

1
2
3 Fizz
4
5 Buzz
6 Fizz
7 
8 
9 Fizz
10 Buzz
11 
12 Fizz
13
14 
15 Fizz Buzz

Module: 
8/3 = 2.0 
8/3 = 1.0

## Classes with Pakiman 

```

class Pakiman
{
    constructor(n, l, a)
    {
        this.image = new Image();
        this.name = n;
        this.life = l;
        this.attack = a;
        this.image.src = images[this.name];
    }
    talk()
    {
        alert(this.name);
    }
    show()
    {   
        document.body.appendChild(this.image);
        document.write("<p>");
        document.write("<strong>" + this.name + "</strong> <br />");
        document.write("Life: " + this.life + " <br />");
        document.write("Attack: " + this.attack + "<br />");
        document.write("<hr>");
        document.write("</p>");
    }
}

var images = [];
images["Cauchin"] = "assets/cerdo.png";
images["Pokacho"] = "assets/pollo.png";
images["Tocinauro"] = "assets/vaca.png";
images["Chorizon"] = "assets/vaca.png";

// var images = 
// {
//     Cauchin = "assets/cerdo.png";
// }

// var cauchin = new Pakiman("Cauchin", 100, 30);
// var pokacho = new Pakiman("Pokacho", 80, 50);
// var tocinauro = new Pakiman("Tocinauro", 120, 40);

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));
coleccion.push(new Pakiman("Chorizon", 100, 40)); 

```

## POST, GET, METHODS.      

### The GET Method 

Get is used to request data from a specified resource, and writes in our URL the requested variables.

``/test/demo_from.php?name1=value1&name2=value2 ``

Some other notes on the GET Requests.

[*] GET Requests can be cached
[*] GET Requests remain in the browser history
[*] GET requests can be bookmarked
[*] GET requests should never be used when dealing with sensitive data (passwords)
[*] GET request have length restrictions
[*] GET requests is only used to request data (can't modify)

### The POST method 

The data sent to the server with POST is stored in the request body of the HTTP request.

````
POST /test/demo_form.php HTTP/1.1
Host: google.com
name1=value1&name2=value2
````
Some other notes of the POST requests.

[*] POST requests are never cached
[*] POST requests do not remain in the browser history
[*] POST requests cannot be bookmarked
[*] POST requests have no restrictions of data length 

### MEAN Stack

MongoDB Express Angular Node JS.

## Using our first Node JS Server.

We have to use the NPM package and NodeJS server, because we need to run JavaScript code in the Server Side, so NodeJS is the best solution for this problem.

At the first point we have to do the followings:

``npm init first_express``

``npm install express`` 

Express is a web application framework to help organize your web application into an MVC architecture on the server side. 
Express JS basically helps you manage everything, from routes, to handling requests and views. 

````
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


````