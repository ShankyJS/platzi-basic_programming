class billetes
{
    constructor(img, valor, cantidad)
    {
        this.img = new Image();
        this.valor = valor;
        this.cantidad = cantidad;
        this.img.src = images[this.valor];
    }
}

var images = [];
images[10] = "assets/10.jpg";
images[20] = "assets/20.jpg";
images[50] = "assets/50.jpg";

var coleccion = [];
coleccion.push(new billetes(this.valor,50,3));
coleccion.push(new billetes(this.valor,20,3));
coleccion.push(new billetes(this.valor,50,3));