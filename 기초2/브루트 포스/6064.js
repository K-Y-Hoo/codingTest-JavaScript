const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const t = parseInt(input.shift());
input = input.map((v) => v.trim().split(" ").map(Number));
const answer = [];

input.forEach((v) => {
  const [m, n, x, y] = v;
  const last = lcm(m, n);
  let X = x;
  let Y = y;
  while (true) {
    if (X > last || y > last) {
      answer.push(-1);
      break;
    } else if (X > Y) {
      Y += n;
    } else if (X < Y) {
      X += m;
    } else if (X === Y) {
      answer.push(X);
      break;
    }
  }
});

console.log(answer.join("\n"));

function gcd(a, b) {
  if (b === 0) return a;
  return a > b ? gcd(b, a % b) : gcd(a, b % a);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
