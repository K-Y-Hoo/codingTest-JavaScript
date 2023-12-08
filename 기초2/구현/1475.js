const fs = require("fs");
const { PassThrough } = require("stream");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim();

let plastics = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let cnt = 0;

for (n of input) {
  if (n === "6" || n === "9") {
    cnt++;
    if (cnt % 2 !== 0) {
      plastics[6]++;
    }
  } else {
    plastics[n]++;
  }
}
console.log(Math.max(...plastics));
