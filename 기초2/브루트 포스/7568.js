const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = parseInt(input.shift());

const arr = [];
for (let i = 0; i < input.length; i++) {
  const [weight, height] = input[i].split(" ").map(Number);
  arr.push([weight, height]);
}

const rank = [];

for (let i = 0; i < n; i++) {
  let cnt = 1;
  for (let j = 0; j < n; j++) {
    if (i !== j) {
      if (arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1]) {
        cnt++;
      }
    }
  }
  rank.push(cnt);
}

console.log(rank.join(" "));
