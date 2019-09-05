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

//variable of tells our the object 
//variable in tells us the index
for (var pakimonster of coleccion)
{
    pakimonster.show();
}
// pokacho.talk();
// cauchin.show();
// pokacho.show();
// tocinauro.show();

for(var x in coleccion[0])
{
    console.log(x);
}
