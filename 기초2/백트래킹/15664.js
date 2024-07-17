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

      for (let i = 0; i < result.length; i++) {
        if (result[i].toString() === arr.toString()) return;
      }
      result.push(arr);
      return;
    }

    for (let i = idx; i < numArr.length; i++) {
      if (!visited[i]) {
        seq[k] = numArr[i];
        visited[i] = true;
        dfs(k + 1, i);
        visited[i] = false;
      }
    }
  }

  dfs(0, 0);
  //   console.log(result);
  result.forEach((el) => {
    answer += el.join(' ') + '\n';
  });
  console.log(answer);
}

solution(n, m);
