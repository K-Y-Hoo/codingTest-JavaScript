const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const newInput = input[0].toUpperCase();
const arr = new Array(26).fill(0);
let str = [];

for (let i = 0; i < newInput.length; i++) {
  arr[newInput.charCodeAt(i) - 65]++;
}

let max = Math.max(...arr);
let index = arr.indexOf(max);

let same = false;

for (let i = 0; i < 26; i++) {
  if (arr[i] === max && index != i) {
    same = true;
    break;
  }
}

console.log(same ? "?" : String.fromCharCode(index + 65));