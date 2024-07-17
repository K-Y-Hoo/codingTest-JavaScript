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

  function dfs(k) {
    if (k === m) {
      const arr = [];
      for (let i = 0; i < m; i++) {
        arr.push(seq[i]);
      }

      result.push(arr.join(' '));
      return;
    }

    for (let i = 0; i < numArr.length; i++) {
      if (!visited[i]) {
        seq[k] = numArr[i];
        visited[i] = true;
        dfs(k + 1);
        visited[i] = false;
      }
    }
  }

  dfs(0);
  console.log([...new Set(result)].join('\n'));
}

solution(n, m);
