const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = parseInt(input.shift());
const fearArr = input[0].split(" ").map(Number);

fearArr.sort((a, b) => a - b);

let group = 0;
let count = 0;

for (fear of fearArr) {
  count++;
  if (count >= fear) {
    group++;
    count = 0;
  }
}

console.log(group);
