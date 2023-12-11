const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim();
const n = parseInt(input);
console.log("*".repeat(n) + " ".repeat(2 * n - 3) + "*".repeat(n));
let answer = "";
for (let i = 1; i <= n - 2; i++) {
  answer +=
    " ".repeat(i) +
    "*" +
    " ".repeat(n - 2) +
    "*" +
    " ".repeat(2 * n - 3 - 2 * i) +
    "*" +
    " ".repeat(n - 2) +
    "*";
  if (i !== n - 2) {
    answer += "\n";
  }
}
if (answer !== "") {
  console.log(answer);
}
console.log(
  " ".repeat(n - 1) + "*" + " ".repeat(n - 2) + "*" + " ".repeat(n - 2) + "*"
);
answer = "";
for (let i = n - 2; i >= 1; i--) {
  answer +=
    " ".repeat(i) +
    "*" +
    " ".repeat(n - 2) +
    "*" +
    " ".repeat(2 * n - 3 - 2 * i) +
    "*" +
    " ".repeat(n - 2) +
    "*";
  if (i !== 1) {
    answer += "\n";
  }
}
if (answer !== "") {
  console.log(answer);
}
console.log("*".repeat(n) + " ".repeat(2 * n - 3) + "*".repeat(n));
