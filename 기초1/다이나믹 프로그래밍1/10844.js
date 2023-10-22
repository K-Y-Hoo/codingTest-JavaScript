const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const inputs = fs.readFileSync(filePath).toString().trim();
const input = parseInt(inputs);
const divide = 1000000000;

const d = Array.from(new Array(input + 1), () => new Array(10));

d[1] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
d[2] = [1, 1, 2, 2, 2, 2, 2, 2, 2, 1];

for (let n = 3; n <= input; n++) {
  for (let i = 0; i < 10; i++) {
    if (i === 0) {
      d[n][i] = d[n - 1][i + 1] % divide;
    } else if (i >= 1 && i <= 8) {
      d[n][i] = (d[n - 1][i - 1] + d[n - 1][i + 1]) % divide;
    } else {
      d[n][i] = d[n - 1][i - 1] % divide;
    }
  }
}

let answer = 0;
for (let i = 0; i < 10; i++) {
  answer += d[input][i];
}

console.log(answer % divide);
