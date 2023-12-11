const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim();
const n = parseInt(input);

// const result = [];
// for (let t = 1; t <= n; t++) {
//   let answer = "";
//   for (let i = 0; i < n - t; i++) {
//     answer += " ";
//   }
//   for (let i = 0; i < t * 2 - 1; i++) {
//     answer += "*";
//   }

//   result.push(answer);
// }

// console.log(result.join("\n"));

let answer = "";
for (let i = 1; i <= n; i++) {
  answer += " ".repeat(n - i) + "*".repeat(i * 2 - 1) + "\n";
}

console.log(answer);
