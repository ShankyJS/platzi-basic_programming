var numbers = 100;
// var dividible = false;


for(var i = 1; i <= 100; i++)
{
    // dividible = false;
    if(isDividible(i, 3))
    {
        document.write("Fizz");
        // dividible = true;
    }
    if(isDividible(i, 5))
    {
        document.write("Buzz");
        // dividible = true;
    }
    if(!isDividible(i,3) && !isDividible(i,5))
    {
        document.write(i);
    }
    document.write("</br>");
}

function isDividible(num, divisor)
{
    if(num % divisor ==0)
    {
        return true;
    }
    else
    {
        return false;
    }
}