var entregado = [];
var dinero = 0;
var div = 0;
var papeles = 0;
var resultado = document.getElementById("resultado");

var extraer = document.getElementById("extract");
extraer.addEventListener("click", entregarDinero);

function entregarDinero()
{
    var m = document.getElementById("money");
    dinero = parseInt(m.value);

    for(var bi of coleccion)
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

            entregado.push( new billetes(bi.valor, bi.valor, papeles));
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
            resultado.innerHTML= resultado.innerHTML + e.cantidad + " billetes de $: " + e.valor +  "<br/>";
        }
        
    }
}