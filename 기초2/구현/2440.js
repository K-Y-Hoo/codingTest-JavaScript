const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim();
const n = parseInt(input);

for (let t = 0; t < n; t++) {
  let answer = "";
  for (let i = 0; i < n - t; i++) {
    answer += "*";
  }
  console.log(answer);
}
