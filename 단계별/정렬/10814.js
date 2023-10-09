const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");
let n = inputs.shift();
let arr = [];
for (let i = 0; i < n; i++) {
  let [age, name] = inputs[i].trim().split(" ");
  arr.push([Number(age),name]);
}

arr.sort((a, b) => {
  if (a[0] !== b[0]) {
    return a[0] - b[0];
  } 
});

let result = [];
for (let i = 0; i < n; i++) {
  let answer = arr[i].join(" ");
  result.push(answer);
}
console.log(result.join("\n"));