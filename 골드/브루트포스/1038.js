const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim();
const n = parseInt(input);
const dec = [];

for (let i = 1; i <= 1023; i++) {
  let num = 0;
  let temp = i;
  for (let j = 9; j >= 0; j--) {
    if (temp % 2 === 1) num = 10 * num + j;
    temp = Math.floor(temp / 2);
  }
  dec.push(num);
}

dec.sort((a, b) => a - b);

if (n > 1022) console.log(-1);
else console.log(dec[n]);
