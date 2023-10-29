const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim();
input = parseInt(input);

const coins = [500, 100, 50, 10, 5, 1];
let rest = 1000 - input;

let count = 0;
for (let coin of coins) {
  if (rest < 5) {
    count += rest;
    rest = 0;
    break;
  }

  if (Math.floor(rest / coin)) {
    count += Math.floor(rest / coin);
    rest %= coin;
  }
}

console.log(count);
