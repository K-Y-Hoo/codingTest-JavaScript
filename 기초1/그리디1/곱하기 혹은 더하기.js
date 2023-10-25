const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().split("");
let total = parseInt(input.shift());

for (let i = 0; i < input.length; i++) {
  let num = parseInt(input[i]);
  if (num <= 1 || total <= 1) {
    total += num;
  } else {
    total *= num;
  }
}

console.log(total);
