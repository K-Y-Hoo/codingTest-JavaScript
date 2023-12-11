const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim();
const n = parseInt(input);
let answer = "";
for (let i = n; i > 0; i--) {
  answer += " ".repeat(n - i) + "*".repeat(i) + "\n";
}
console.log(answer);
