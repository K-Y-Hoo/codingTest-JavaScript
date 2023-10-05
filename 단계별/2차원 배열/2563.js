const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map(i => i.split(" "));
const arr = Array.from(Array(100), () => Array(100).fill(0));
let count = 0;

for (let i = 0; i < n; i++) {
  let startX = Number(input[i][0]);
  let startY = Number(input[i][1]);
  for (let j = 0; j < 10; j++) {
    for (let k = 0; k < 10; k++) {
      /*if (arr[startX + j][startY + k] !== 0) {
        continue;
      }*/
      if (arr[startX + j][startY + k] === 0) {
        arr[startX + j][startY + k] = 1;
        count++;
      }
    }
  }
}
console.log(count);