const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, k] = inputs[0].split(" ").map(Number);
let arr = inputs[1].split(" ").map(Number);

arr.sort((a,b) => b-a);

console.log(arr[k-1]);
