// Clase principal de este proyecto, define la clase Billete, es construida por 2 valores, v y C.
// Siendo valor del billete v: y cantidad de billetes c:
class Billete 
{
    constructor(v, c)
    {
        this.valor = v;
        this.cantidad = c;
    }
}

// Creamos un arreglo llamado CAJA que nos ayuda a crear cada uno de los billetes en la clase
// Billete, esto lo logramos con la sentencia caja.push (new "INSTANCIA DE LA CLASE BILLETE, CON 2 PARAMETROS")
var caja = [];
caja.push( new Billete(50, 3) );
caja.push( new Billete(20, 2) );
caja.push( new Billete(10, 2) );

// Creamos el vector entregado que nos dira cuantos billetes hemos entregado. 

var entregado = [];

// La variable dinero almacenara la cantidad de dinero que inserte el usuario en el campo money
var dinero = 0;

// La variable DIV almacena el resultado de Floor(cantidad de dinero / valor del billete (cada uno de ellos hasta iterar el ultimo))
var div = 0;
// La variable Papeles es quien determina cuantos billetes se entregaran al usuario.
var papeles = 0;

//Traemos el <p> en el que mostraremos el resultado de cuantos billetes se entregaran. 

var resultado = document.getElementById("resultado");

// Traemos el elemento extraer que es el boton que accionara la funcion que entregarael dinero al usuario.
var b  = document.getElementById("extraer");
// Agregamos el evento para que la funcion se dispare al hacer click al boton extract. 
b.addEventListener("click", entregarDinero);


function entregarDinero()
{
    // traemos el objeto money, que es el cuadro de texto donde se ingresa la cantidad de dinero 
    // que el usuario requiere.

    var m = document.getElementById("money");
    // lo convertimos en entero ya que por defecto los campos todos son strings. 
    dinero = parseInt(m.value);
     
    //iteramos en el arreglo caja. 
    for(var bi of caja)
    {
    // cuando el dinero que necesite el usuario sea igual a 0 se sale del loop.
        if(dinero > 0)
        {
    // Dividimos el dinero / el valor del primer billete y tomamos solo el valor entero.            
            div = Math.floor(dinero / bi.valor);
            // Si el resultado de esta division es mayor a la cantidad de billetes 
            // la cantidad de billetes a entregar sera la cantidad que tenga el objeto.
            if(div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }
            else
            // si no simplemente tomara los papeles que diga la division. 
            {
                papeles = div;
            }

            // Ahora cargamos el arreglo entregado para llenar cuanto dinero tendra ahora el usuario.

            entregado.push( new Billete(bi.valor, papeles));
            // Restamos el valor de dinero para determinar cuanto nos hace falta y asi seguir iterando hasta el siguiente billete.
            dinero = dinero - (bi.valor * papeles);
        }
    }
    // Si al salir de la ultima iteracion el valor de dinero es mayor a 0 el cajero no tiene suficiente.
    if (dinero > 0)
    {
        resultado.innerHTML='No tengo tanto man';
    }
    // realizamos este for para que recorra todo el dinero entregado
    for(var e of entregado)
    { 
        // si la cantidad de billetes entregados es mayor a 0 
        if(e.cantidad > 0)
        {
            // manera correcta de insertar en HTML
            resultado.innerHTML= resultado.innerHTML + e.cantidad + " billetes de $: " + e.valor + "<br/>";
        }
        
    }
}