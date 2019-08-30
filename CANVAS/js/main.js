var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf, yf;
var iy, fx;
var i = 0;


function drawLine(color, initialx, initialy, finalx, finaly)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(initialx, initialy);
    lienzo.lineTo(finalx, finaly);
    lienzo.stroke();
    lienzo.closePath();
}

for (l=0; l < lineas; l++)
{
    yi = 10 * l;
    xf = 10 * (l+1);
    drawLine('grey', 0, yi, xf, 300);
    // console.log('line ' + l);
}

drawLine('grey', 1,1,1,300);
drawLine('grey', 1, 299, 299 ,299);

l = 0;
do {
    iy = (l*10);
    fx = 300 - (l * 10);
    drawLine('red', 300, iy, fx, 300);
    console.log(iy, fx);
    l = l+1;
} while (l < lineas);


