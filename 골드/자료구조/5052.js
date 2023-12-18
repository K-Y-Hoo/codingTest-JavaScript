const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(arr) {
  arr.sort();
  for (let i = 1; i < arr.length; i++) {
    const prev = arr[i - 1];
    const curr = arr[i];
    if (curr.startsWith(prev)) return "NO";
  }
  return "YES";
}

for (let i = 1; i < input.length; ) {
  const n = parseInt(input[i]);
  console.log(solution(input.slice(i + 1, i + 1 + n)));
  i += n + 1;
}
