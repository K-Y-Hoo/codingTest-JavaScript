const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("-");

//console.log(input);

for (let i = 0; i < input.length; i++) {
  input[i] = input[i].split("+");
  let sum = 0;
  for (let j = 0; j < input[i].length; j++) {
    sum += parseInt(input[i][j]);
  }
  input[i] = sum;
}
//console.log(input);

if (input.length === 1) {
  console.log(input[0]);
} else if (input.length > 1) {
  let answer = input[0];
  for (let i = 1; i < input.length; i++) {
    answer -= input[i];
  }
  console.log(answer);
}
