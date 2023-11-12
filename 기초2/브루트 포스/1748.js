const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim();
const n = parseInt(input);

// let answer = "";

// for (let i = 1; i <= n; i++) {
//   answer += String(i);
// }

// console.log(answer);
// console.log(answer.length);

let sum = 0;
for (let i = 1; i <= input; i *= 10) {
  sum += input - i + 1;
}

console.log(sum);
