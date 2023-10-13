const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const inputs = fs.readFileSync(filePath).toString().trim().split("");
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const arr = new Array(26).fill(0);
inputs.forEach((i) => arr[alphabet.indexOf(i)]++);
console.log(arr.join(" "));