var d = document.getElementById("dibujito");
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
// lienzo.beginPath();
// lienzo.strokeStyle="red";
// lienzo.moveTo(150, 200);
// lienzo.lineTo(250, 100);
// lienzo.lineTo(200, 50);
// lienzo.lineTo(150,100);
// lienzo.lineTo(100, 50);
// lienzo.lineTo(50,100);
// lienzo.lineTo(150,200);
// lienzo.stroke();
// lienzo.closePath();
//
// lienzo.beginPath();
// lienzo.strokeStyle="yellow";
// lienzo.moveTo(150, 190);
// lienzo.lineTo(240, 100);
// lienzo.lineTo(200, 60);
// lienzo.lineTo(150,110);
// lienzo.lineTo(100, 60);
// lienzo.lineTo(60,100);
// lienzo.lineTo(150, 190);
// lienzo.stroke();
// lienzo.closePath();
//
// lienzo.beginPath();
// lienzo.strokeStyle="green";
// lienzo.moveTo(150, 180);
// lienzo.lineTo(230, 100);
// lienzo.lineTo(200, 70);
// lienzo.lineTo(150,120);
// lienzo.lineTo(100, 70);
// lienzo.lineTo(70,100);
// lienzo.lineTo(150, 180);
// lienzo.stroke();
// lienzo.closePath();
//
// var e = document.getElementById("rombito");
// var cuarzo = e.getContext("2d");
//
// cuarzo.beginPath();
// cuarzo.strokeStyle="black";
// cuarzo.moveTo(100, 100);
// cuarzo.lineTo(140, 100);
// cuarzo.lineTo(160, 120);
// cuarzo.lineTo(160, 150);
// cuarzo.lineTo(120, 160);
//
// cuarzo.stroke();
// cuarzo.closePath();
