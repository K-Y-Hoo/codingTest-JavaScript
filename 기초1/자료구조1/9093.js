const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");
let n = parseInt(inputs.shift());

for (let i = 0; i < n; i++) {
  let temp = [];
  let arr = inputs[i].trim().split(" ");
  for (let j = 0; j < arr.length; j++) {
    temp.push(arr[j].split("").reverse().join(""));
  }
  console.log(temp.join(" "));
}