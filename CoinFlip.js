console.log("Welcome to Coin Flip");
const HEAD = 1;
let coin = Math.floor(Math.random() * 10);

if(coin == HEAD)
    console.log("---------HEAD-------");
else
    console.log("-------TAIL-------");
