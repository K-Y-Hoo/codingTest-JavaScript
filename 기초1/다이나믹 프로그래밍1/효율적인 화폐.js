const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input.shift().trim().split(" ").map(Number);
const d = new Array(m).fill(10001);
d[0] = 0;
const coinsArr = [];
for (let i = 0; i < n; i++) {
  coinsArr.push(parseInt(input.shift()));
}

for (let i = 0; i < n; i++) {
  for (let j = coinsArr[i]; j < m + 1; j++) {
    if (d[j - coinsArr[i]] !== 10001) {
      d[j] = Math.min(d[j], d[j - coinsArr[i]] + 1);
    }
  }
}

if (d[m] === 10001) {
  console.log(-1);
} else {
  console.log(d[m]);
}
