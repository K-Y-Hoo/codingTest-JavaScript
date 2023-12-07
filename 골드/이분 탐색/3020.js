const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [info, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [n, m] = info.split(" ").map(Number);
const arr = input.map((el) => parseInt(el.trim()));

const bottom = new Array(m + 1).fill(0);
const top = new Array(m + 1).fill(0);

arr.forEach((el, idx) => {
  idx % 2 === 0 ? bottom[el]++ : top[m + 1 - el]++;
});

for (let i = 1; i <= m; i++) {
  top[i] += top[i - 1];
  bottom[m - i] += bottom[m - i + 1];
}

let count = 0;
let min = Infinity;

for (let i = 1; i <= m; i++) {
  if (top[i] + bottom[i] < min) {
    count = 1;
    min = top[i] + bottom[i];
  } else if (top[i] + bottom[i] === min) {
    count++;
  }
}
console.log(min, count);
