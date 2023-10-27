const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("").map(Number);
input.sort((a, b) => b - a);
const sum = input.reduce((acc, cur) => acc + cur);

if (sum % 3 === 0 && input.includes(0)) {
  console.log(input.join(""));
} else {
  console.log(-1);
}
