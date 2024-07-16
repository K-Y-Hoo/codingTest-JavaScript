const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const [n, m] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

function solution(n, m) {
  const visited = new Array(n).fill(false);
  const seq = new Array(m).fill(0);

  let answer = '';

  function dfs(k) {
    if (k === m) {
      const arr = [];
      for (let i = 0; i < m; i++) {
        arr.push(seq[i]);
      }
      //   console.log('k === m !!!');
      answer += `${arr.join(' ')}\n`;
      //   console.log(answer);
      return;
    }

    for (let i = 1; i <= n; i++) {
      seq[k] = i;
      dfs(k + 1);
    }
  }

  dfs(0);
  console.log(answer);
}

solution(n, m);
