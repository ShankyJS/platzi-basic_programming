# platzi-basic_programming
Basic Programming Course on Platzi / Sponsored by Facebook Developer Circles. 

## First code line.

In Google Chrome, we can use his developer tools to do awesome things, today I wrote my "first code line" in JavaScript.

First, let's try the command _alert_ 

```
    alert ("Hi, my name is Jhan");
```

Now we can use the _var_ tag to save our name in a variable.

```
var name = "Jhan";
```

Now if we type name on the f12 Console, it's display our name.

```
    alert ("My name is " + name)
```
## Working with numbers

We can save numbers in variables, so we can solve easy math problems.

```
var x = 1;
var y = 3;
x + y 


---> 4
```

We can prompt data too.

```
name = prompt("Write your name");
alert("Your name is " + name); 
```

## JavaScript is a Interactive Language Programming

[]HTML is for the Structure of the Document.
[]CSS is the design of the website (visual things).
[]JavaScript is the interactivity on the websites. 
[]JavaScript is an interpreted language. 
[]JavaScript != Java

## Alert

function   string     limit
 
_alert_("one message");

## Variables

var declares the existence of a variable, we can do vars with others variables. 

```
var x = 1; 
var y = 2;
var z = x + y; 
alert ("The value of Z is " +z);
```
# True HTML, CSS, JS.

(HCJ folder)

This writes a message in our body.
```
document.write("Special message with Alert");
```

[] Lowercase or Upcase it applies on Vars in JavaScript.
[] We cannot use numbers in the begin of a variable.

# Our weight in other planet. 

(WOP folder)

Gravity in earth: g = 9.8 m/s2
Gravity in marth: gm = 3.7 m/s2
Gravity in jupiter: gj = 24.8 m/s2
weight = 77
marth = (weight*gm) / g

[] The code blocks doesnt use ; 
[] parseInt(Variable);
[] parseFloat(Variable);
[] \n 

# The DOM: Our workplace in Web.

(DOM FOLDER)

Document model Object.

All in our HTML is called: document
All on every Window is called: window
The entire browser is called: Navigator


Window is the object that controlls every tab, when we touch a buttom and it opens a new window, thats works using windows.

Document is an object that controlls where are the forms. textboxs, titles, images and every elements what the user see. 

Document Object Model: is the way of the browser organize all our HTML content and structures our web application.

Web as a tree: 

HTML > HEAD > TITLE - BODY > H1 - P - SCRIPT.

## Object Document


[] document.write("this write in your document");

When a variable is part of an object, the variable is an attribute or property, but when a function is part of an object its called method.

Location is an attribute of window object. 

_var_ route = window.location;

Console.log sends messages by console (just for developers.)

# Drawing in DOM

0,0 inits in the top left corner.

# Working with Functions

When you are writing the same block of code a lot of times it's time to use a function, when you use:
``
lienzo.beginPath()
``
you are invoking a function, but if you want to initialize a new function, this is the correct syntax in JS.

````
function drawLine(color. initialx, initialy, finalx, finaly)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(initialx, initialy);
    lienzo.lineTo(finalx, finaly);
    lienzo.stroke();
    lienzo.closePath(); 
}
````

# Invoke a function. 

``
drawLine('red', 150, 200, 300);
``
## Using the While Cycle. 
````
while(l < lineas)
{
    yi = 10 * l;
    xf = 10 * (l + 1);
    drawLine('grey', 0, yi, xf, 300);
    console.log('line number: ' +l);
    l++;
}
````
