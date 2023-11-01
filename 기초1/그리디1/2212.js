const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let [n, k, input] = fs.readFileSync(filePath).toString().trim().split("\n");
input = input
  .trim()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const diff = [];
let answer = 0;

for (let i = 0; i < n - 1; i++) {
  diff.push(input[i + 1] - input[i]);
}
diff.sort((a, b) => b - a);

for (let i = k - 1; i < n - 1; i++) {
  answer += diff[i];
}
console.log(answer);
