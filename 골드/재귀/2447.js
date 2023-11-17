const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim();
const n = parseInt(input);

let answer = "";

function recursive(i, j) {
  if (i % 3 === 1 && j % 3 === 1) {
    answer += " ";
  } else {
    if (Math.floor(i / 3) === 0 && Math.floor(j / 3) === 0) {
      answer += "*";
    } else {
      recursive(Math.floor(i / 3), Math.floor(j / 3));
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    recursive(i, j);
  }
  answer += "\n";
}

console.log(answer);
