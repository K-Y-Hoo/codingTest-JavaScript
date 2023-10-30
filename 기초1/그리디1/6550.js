const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const arr = [];
for (let i = 0; i < input.length; i++) {
  arr.push(input[i].trim().split(" "));
}

for (let i = 0; i < arr.length; i++) {
  const s = arr[i][0];
  const t = arr[i][1];

  const sQueue = s.split("");

  for (str of t) {
    if (str === sQueue[0]) {
      sQueue.shift();
    }
  }

  console.log(sQueue.length === 0 ? "Yes" : "No");
}
