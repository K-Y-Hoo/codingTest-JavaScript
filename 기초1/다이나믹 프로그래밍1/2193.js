const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim();
const n = parseInt(input);

const d = new Array(n).fill(0);
d[0] = 0;
d[1] = 1;
d[2] = 1;
for (let i = 3; i <= n; i++) {
  d[i] = BigInt(d[i - 1]) + BigInt(d[i - 2]);
}

console.log(String(d[n]));
