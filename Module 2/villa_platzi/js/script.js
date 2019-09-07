// Creamos un JSON con los keycodes de las teclas arrow
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

//Creamos las coordenadas de nuestro cerdo en X y Y y colocamos desde donde queremos que inicie
var cerdoX = 170;
var cerdoY = 170;

// Agregamos un event listener al objeto Document y creamos la funcion que movera a nuestro cerdo
document.addEventListener("keydown", moverCerdo);

// Creamos el objeto vp que nos funcionara para instanciar al elemento villaplatzi del HTML
var vp = document.getElementById('villaplatzi');

//creamos la variable paper que utilizaremos como un lienzo, trayendo el contexto 2D.
var paper = vp.getContext("2d");

//JSON para almacenar urls y estados de carga de cada imagen.
var background = {
    url: "assets/tile.png",
    loadOK: false
}
var vaca = {
    url: "assets/vaca.png",
    loadOK: false
}
var cerdo = {
    url: "assets/cerdo.png",
    loadOK: false
}
var pollo = {
    url: "assets/pollo.png",
    loadOK: false
}

// variable que almacena una cantidad random de 1 a 10
var quantity = random(1,10);

// Creación de instancia de imagen de fondo desde el objeto background (traemos la url y el evento load para crear la func loadBackground)
background.object = new Image();
background.object.src = background.url;
background.object.addEventListener("load", loadBackground);

vaca.object = new Image();
vaca.object.src = vaca.url;
vaca.object.addEventListener("load", loadVacas);

cerdo.object = new Image();
cerdo.object.src = cerdo.url;
cerdo.object.addEventListener("load", loadCerdos);

pollo.object = new Image();
pollo.object.src = pollo.url;
pollo.object.addEventListener("load", loadPollos);

// Definimos todas las funciones.
function loadBackground()
{
    background.cargaOK = true;
    draw();
}

function loadVacas()
{
    vaca.cargaOK = true;
    draw();
}

function loadCerdos()
{
    cerdo.cargaOK = true;
    draw();
}

function loadPollos()
{
    pollo.cargaOK = true;
    draw();
}

// Definimos la funcion draw y decimos que si cargaOK es igual a true podemos dibujar sobre nuestro objeto paper con la func drawImage
function draw()
{
    if(background.cargaOK == true)
    {  
        paper.drawImage(background.object, 0, 0);
    }

// Creamos un bucle para crear vacas en posiciones aleatorias, haciendo uso de la funcion random.
    if(vaca.cargaOK == true)
    {  
        for(var v=0; v < quantity; v++)
        {
            var x = random(0, 6);
            var y = random(0, 6);
            var x = x * 70;
            var y = y * 70;
            paper.drawImage(vaca.object, x, y);
        }
    }
// Creamos un bucle para crear pollos aleatorios.
    if(pollo.cargaOK == true)
    {
        for(var p=0; p < quantity; p++)
        {
            var x = random(0, 7);
            var y = random(0, 7);
            var x = x * 80;
            var y = y * 80;
            paper.drawImage(pollo.object, x, y);
        }   
    }
// Creamos la carga del cerdo que almacenara la ultima posicion del cerdo en X y en Y
    if(cerdo.cargaOK == true)
    {
        paper.drawImage(cerdo.object, cerdoX, cerdoY);
    }
}

// Definimos la funcion mover cerdo con el parametro evento con el que mandamos a llamar a la funcion moverCerdo
function moverCerdo(evento)

{
    var movimiento = 5;
    switch (evento.keyCode)
    {
        case teclas.UP:
            loadCerdos(cerdoX, cerdoY, cerdoX, cerdoY - movimiento, paper);
            cerdoY = cerdoY - movimiento;
        break;

        case teclas.DOWN:
            loadCerdos(cerdoX, cerdoY, cerdoX, cerdoY + movimiento, paper);
            cerdoY = cerdoY + movimiento;
        break;

        case teclas.LEFT:
            loadCerdos(cerdoX, cerdoY, cerdoX - movimiento, cerdoY, paper);
            cerdoX = cerdoX - movimiento;
        break;

        case teclas.RIGHT:
            loadCerdos(cerdoX, cerdoY, cerdoX + movimiento,cerdoY, paper);
            cerdoX = cerdoX + movimiento;
        break;
    }
}

loadCerdos(cerdoX-1, cerdoY-1, cerdoX+1, cerdoY+1, paper)

function random(min, maxi)
{
    var result;
    result = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return result;
}



// var z;

// for(var i=0; i < 10; i++)
// {
//     z = random(10, 20);
//     document.write(z +", ")
// }

