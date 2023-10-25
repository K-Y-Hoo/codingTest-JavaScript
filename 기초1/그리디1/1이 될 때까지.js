const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let [n, k] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);
let count = 0;

while (true) {
  let target = Math.floor(n / k) * k;
  count += n - target;
  n = target;

  if (n < k) {
    break;
  }

  count += 1;
  n = Math.floor(n / k);
}

count += n - 1;
console.log(count);
