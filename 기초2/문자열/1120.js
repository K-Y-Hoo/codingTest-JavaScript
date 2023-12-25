const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let [a, b] = fs.readFileSync(filePath).toString().trim().split(" ");

let min = b.length;

for (let i = 0; i <= b.length - a.length; i++) {
  let dif = 0;
  for (let j = 0; j < a.length; j++) {
    if (a[j] !== b[i + j]) dif++;
  }
  min = Math.min(min, dif);
}
console.log(min);
