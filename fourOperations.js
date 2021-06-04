console.log("Welcome to Perform Arithmatic Operations ");

let a = Math.floor(Math.random() * 10);
let b = Math.floor(Math.random() * 10);
let c = Math.floor(Math.random() * 10);
let d = Math.floor(Math.random() * 10);

let num1 = a + b * c;
let num2 = a % b + c;
let num3 = c + a / b;
let num4 = a * b + c;

let MaxMethod = function(a,b)
{
    if(a > b)
    {
        return a;
    }
    else
    {
        return b;
    }
}

//For Maximun Number
let max1 = MaxMethod(num1,num2);
let max2 = MaxMethod(max1,num3);
let max3 = MaxMethod(max2,num4);
 console.log("Max Number-->"+max3);

let MinMethod = function(n,m)
{
    if(n < m)
    {
        return n;
    }
    else
    {
        return m;
    }
}

let min1 = MinMethod(num1,num2);
let min2 = MinMethod(min1,num3);
let min3 = MinMethod(min2,num4);
console.log("Max Number-->"+min3);