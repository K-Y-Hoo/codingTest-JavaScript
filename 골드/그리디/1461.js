const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input.shift().trim().split(" ").map(Number);
input = input.shift().split(" ").map(Number);

let positive = [];
let negetive = [];
let answer = 0;
input.forEach((v) => {
  if (v > 0) {
    positive.push(v);
  } else {
    negetive.push(Math.abs(v));
  }
});

positive.sort((a, b) => b - a);
negetive.sort((a, b) => b - a);

if (negetive.length === 0 || negetive[0] < positive[0]) {
  answer += positive[0];
  positive = positive.slice(m);
} else {
  answer += negetive[0];
  negetive = negetive.slice(m);
}

let idx = 0;
while (idx < positive.length) {
  answer += positive[idx] * 2;
  idx += m;
}
idx = 0;
while (idx < negetive.length) {
  answer += negetive[idx] * 2;
  idx += m;
}
console.log(answer);
