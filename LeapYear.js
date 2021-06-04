const { Console } = require('console');

console.log("Welcome to Leap Year");

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   //let year;
 readline.question('Enter a Year', year =>
  {
    console.log(year);
    if(year % 4 == 0 && year % 400 == 0)
    {
        Console.log("leap Year");
    }
    else{
        console.log("Not Leap Year");
    }
    readline.close();
  });
