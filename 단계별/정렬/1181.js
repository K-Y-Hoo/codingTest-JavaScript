const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");
let n = inputs.shift();

let arr = [];
for (let i = 0; i < n; i++) {
  arr.push(inputs[i].trim());
}
let setArr = new Set(arr);
let newArr = [];
for (i of setArr) {
  newArr.push(i);
}

newArr.sort((a, b) => a.length - b.length || a.localeCompare(b));

console.log(newArr.join("\n"));