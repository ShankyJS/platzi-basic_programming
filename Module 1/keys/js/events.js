    //JavaScript Objects Notations (JSON)
    var teclas = {
        UP: 38,
        DOWN: 40,
        LEFT: 37,
        RIGHT: 39
    };

    function drawLine(color, initialx, initialy, finalx, finaly, lienzo)
    {
        lienzo.beginPath();
        lienzo.strokeStyle = color;
        lienzo.lineWidth = 3;
        lienzo.moveTo(initialx, initialy);
        lienzo.lineTo(finalx, finaly);
        lienzo.stroke();
        lienzo.closePath();
    }

    document.addEventListener("keydown", drawKeyboard);
    var drawing = document.getElementById("drawing_area");
    var paper = drawing.getContext("2d");
    var x = 150;
    var y = 150;

    drawLine("red", x-1, y-1, x+1, x+1, paper);

    //Functions have to start with downcase key.
    function drawKeyboard(event)
    { 
        var color = "green";
        var movement = 10;
    
        
        switch(event.keyCode)
        {
            case teclas.UP:
                drawLine(color, x, y, x, y - movement, paper);
                y = y - movement;
            break;

            case teclas.DOWN:
                drawLine(color, x, y, x, y + movement, paper);
                y = y + movement;
            break;

            case teclas.LEFT:
                drawLine(color, x, y, x - movement, y, paper);
                x = x - movement;
            break;

            case teclas.RIGHT:
                drawLine(color, x, y, x + movement, y, paper);
                x = x + movement;
            break;        
            // default:
            //     console.log("Otra tecla");
            // break;
        }
    }

    // up 38
    // down 40
    // left 37
    // rigth 39
