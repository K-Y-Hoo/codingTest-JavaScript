const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
let arrA = [];
let arrB = [];
for (let i = 1; i <input.length; i++) {
  let newArr = input[i].split(" ").map(Number); 

  if (i <= n) {
    arrA.push(newArr);
  } else {
    arrB.push(newArr);
  }
}
let answer = [];
for (let i = 0; i < n; i++) {
  answer.push([]);
  for (let j = 0; j < m; j++) {
    answer[i].push(arrA[i][j] + arrB[i][j]);
  }
}

for (let i = 0; i < n; i++) {
  console.log(answer[i].join(" "));
}