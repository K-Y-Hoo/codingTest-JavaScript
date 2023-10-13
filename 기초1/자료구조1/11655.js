const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const input = fs.readFileSync(filePath).toString().split('\n');
let str = input[0];

let answer = '';

for (let i = 0; i < str.length; i++) {
  if ('A' <= str[i] && str[i] <= 'Z') {
    nums = str.charCodeAt(i) + 13;
    if (nums > 90) {
      nums -= 26;
    }
    answer += String.fromCharCode(nums);
  } else if ('a' <= str[i] && str[i] <= 'z') {
    nums = str.charCodeAt(i) + 13;
    if (nums > 122) {
      nums -= 26;
    }
    answer += String.fromCharCode(nums);
  } else {
    answer += str[i];
  }
} 
console.log(answer);