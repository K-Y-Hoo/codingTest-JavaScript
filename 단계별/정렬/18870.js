const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");
let n = inputs.shift();
n = Number(n);
/*let count = 0;
let answer = [];
let temp = [];
let arr = inputs[0].split(" ").map(Number);
temp = arr.slice();
for (let i = 0; i < arr.length; i++) {
  count = 0;
  for (let j = 0; j < temp.length; j++) {
    if (arr[i] > temp[j]) {
      count++;
    }
  }
  answer.push(count);
}
console.log(answer);*/
const setArr = inputs[0].split(' ').map(Number).sort((a,b) => a-b);
const set = new Set(setArr);
const map = new Map();
[...set].forEach((el, idx) => {
  map.set(el, idx);
})
//console.log(map);

let answer = '';
inputs[0].split(' ').forEach((el, idx) => {
  answer += map.get(+el) + ' ';
})
console.log(answer);