const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [a, b] = input.shift().split(" ").map(Number);
const m = parseInt(input.shift());
arrA = input[0].split(" ").map(Number).reverse();
let decimal = 0;

for (let i = 0; i < m; i++) {
  let num = arrA[i];
  decimal += num * a ** i;
}

if (decimal === 0) {
  console.log(0);
} else {
  let answer = [];

  while (decimal > 0) {
    answer.unshift(decimal % b);
    decimal = Math.floor(decimal / b);
  }
  console.log(answer.join(" "));
}
