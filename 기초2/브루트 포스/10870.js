const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim();
let n = parseInt(input);

function fibo(n) {
  if (n === 0) return 0;
  else if (n === 1) return 1;
  else return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(n));
