const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
input.pop();
const arr = input.map((el) => el.split(' ').map(Number));

let k;
let s;
let answer = '';

function dfs(num, arr) {
  if (arr.length === 6) {
    answer += `${arr.join(' ')}\n`;
    return;
  }
  for (let i = num; i < k; i++) {
    dfs(i + 1, [...arr, s[i]]);
  }
}

arr.forEach((el) => {
  [k, ...s] = el;
  dfs(0, []);
  answer += '\n';
});

console.log(answer);
