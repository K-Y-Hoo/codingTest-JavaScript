const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim();
const n = parseInt(input);

const d = new Array(n + 1).fill(0);
d[1] = 1;
d[2] = 1;

for (let i = 2; i < n + 1; i++) {
  d[i] = BigInt(d[i - 1]) + BigInt(d[i - 2]);
}

console.log(d[n].toString());
