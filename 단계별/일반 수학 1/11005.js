const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const inputs = fs.readFileSync(filePath).toString().trim().split(" ");

let number = Number(inputs[0]);
let base = Number(inputs[1]);
let answer = [];
let temp = number;
while (temp/base !== 0) {
  answer.push(temp % base);
  temp = Math.floor(temp/base);
}
answer = answer.reverse();
for (let i = 0; i < answer.length; i++) {
  if (answer[i] >= 10 && answer[i] <= 35) {
    answer[i] = String.fromCharCode(answer[i] + 55);
  }
}

console.log(answer.join(''));

//console.log(number.toString(base).toUpperCase());