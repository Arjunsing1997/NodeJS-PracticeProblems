console.log("Welcome to Unit Programs");

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

 readline.question('Enter a Number', number =>
  {
    console.log(number);
    switch(number)
    {
        case 1:
            console.log("--->Unit");
            break;
        case 10:
            console.log("--->Ten");
            break;
        case 100:
            console.log("--->Hundred");
            break;
        case 1000:
            console.log("--->Thousand");
            break;
        case 10000:
            console.log("--->Ten Thousand");
            break;
        case 100000:
            console.log("--->Lakh");
            break;
       default:console.log("Invalid Choice");
    }
    readline.close();
  });