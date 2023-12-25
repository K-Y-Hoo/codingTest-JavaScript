const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim();

const strSet = new Set();
for (let i = 0; i < input.length; i++) {
  for (let j = i; j < input.length; j++) {
    strSet.add(input.slice(i, j + 1));
  }
}

console.log(strSet.size);
