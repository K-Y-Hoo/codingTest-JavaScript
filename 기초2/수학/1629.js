const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [a, b, c] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

function solve(power) {
  if (power === 1n) return a % c;
  const half = solve(power / 2n) % c;
  if (power % 2n) return (half * half * (a % c)) % c;
  return (half * half) % c;
}

console.log(solve(b).toString());
