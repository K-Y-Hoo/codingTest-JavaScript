const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [n, m, nums] = fs.readFileSync(filePath).toString().trim().split("\n");
const brokens = nums
  ? nums.split(" ").reduce((acc, v) => {
      acc[v] = true;
      return acc;
    }, {})
  : {};

let cnt = Math.abs(100 - n);
for (let i = 0; i < 1000000; i++) {
  const numString = String(i);
  let isValid = true;
  for (let j = 0; j < numString.length; j++) {
    if (brokens[numString[j]]) {
      isValid = false;
      break;
    }
  }
  if (isValid) {
    cnt = Math.min(cnt, Math.abs(i - n) + numString.length);
  }
}
console.log(cnt);
