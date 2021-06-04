let num1 = Math.floor(Math.random() * 1000);
let num2 = Math.floor(Math.random() * 1000);
let num3 = Math.floor(Math.random() * 1000);
let num4 = Math.floor(Math.random() * 1000);
let num5 = Math.floor(Math.random() * 1000);

console.log(num1+"\n"+num2+"\n"+num3+"\n"+num4+"\n"+num5);
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

//For Maximun Number
let max1 = MaxMethod(num1,num2);
let max2 = MaxMethod(max1,num3);
let max3 = MaxMethod(max2,num4);
let max4 = MaxMethod(max3,num5);
 console.log("Max Number-->"+max4);

//For Minimum Number
let min1 = MinMethod(num1,num2);
let min2 = MinMethod(min1,num3);
let min3 = MinMethod(min2,num4);
let min4 = MinMethod(min3,num5);
 console.log("Max Number-->"+min4);