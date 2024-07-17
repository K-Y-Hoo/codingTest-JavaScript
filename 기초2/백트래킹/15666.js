const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const [nm, num] = fs.readFileSync(filePath).toString().trim().split('\n');
const [n, m] = nm.split(' ').map(Number);
const numArr = num
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

function solution(n, m) {
  const visited = [];
  const seq = new Array(m).fill(0);

  const result = [];
  let answer = '';

  function dfs(k, idx) {
    if (k === m) {
      const arr = [];
      for (let i = 0; i < m; i++) {
        arr.push(seq[i]);
      }

      result.push(arr.join(' '));
      return;
    }

    for (let i = idx; i < numArr.length; i++) {
      seq[k] = numArr[i];
      dfs(k + 1, i);
    }
  }

  dfs(0, 0);
  console.log([...new Set(result)].join('\n'));
}

solution(n, m);
