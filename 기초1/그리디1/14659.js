const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = parseInt(input.shift());
input = input.shift().split(" ").map(Number);
const countArr = [];
while (input.length) {
  let count = 0;
  man = input.shift();
  for (let i = 0; i < input.length; i++) {
    if (input[i] < man) {
      count++;
    }
    if (input[i] >= man) {
      break;
    }
  }
  countArr.push(count);
}

console.log(Math.max(...countArr));
