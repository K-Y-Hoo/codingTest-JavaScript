const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = parseInt(input.shift());
input = input.map((i) => i.trim().split(" ").map(Number));

let answer = 0;
let count = 0;
const arr = [];

for (let i = 0; i < n; i++) {
  arr.push({ time: input[i][0], start: 1 });
  arr.push({ time: input[i][1], start: -1 });
}

arr.sort((a, b) => (a.time === b.time ? a.start - b.start : a.time - b.time));
//console.log(arr);

arr.forEach((i) => {
  if (i.start === -1) {
    count--;
  } else if (i.start === 1) {
    count++;
  }
  answer = count > answer ? count : answer;
});
console.log(answer);
