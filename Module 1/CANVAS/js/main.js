var text_lines = document.getElementById("text_lines");
var buttom = document.getElementById("buttom");
buttom.addEventListener("click", actionDrawing);

var d = document.getElementById("dibujito");
var width = d.width;
var lienzo = d.getContext("2d");



function drawLine(color, initialx, initialy, finalx, finaly)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(initialx, initialy);
    lienzo.lineTo(finalx, finaly);
    lienzo.stroke();
    lienzo.closePath();
}

function actionDrawing()
{
    var lineas = parseInt(text_lines.value);
    var l = 0;
    var yi, xf;
    var iy, fx;
    var i = 0;
    var space = width / lineas;

    for (i=0; i < lineas; i++)
{
    yi = space * i;
    xf = space * (i+1);
    drawLine('grey', 0, yi, xf, 300);
    // console.log('line ' + l);
}

do {
    iy = (l*space);
    fx = 300 - (l * space);
    drawLine('red', 300, iy, fx, 300);
    l = l+1;
} while (l < lineas);

drawLine('grey', 1,1,1,width-1);
drawLine('red ', 1, width-1, width-1 ,width-1);
}



