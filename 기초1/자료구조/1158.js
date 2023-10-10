const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
let [n, k] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);
const arr = new Array(n).fill(0);
let peopleArr = arr.map((el, idx) => el + idx + 1);
let answer = [];
let count = 1;

while(peopleArr.length) {
  const item = peopleArr.shift();
  if (count % k === 0) {
    answer.push(item);
  } else {
    peopleArr.push(item);
  }
  count++;
}

console.log(`<${answer.join(', ')}>`);