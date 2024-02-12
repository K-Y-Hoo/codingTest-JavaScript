const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = parseInt(input.shift());
const m = parseInt(input.shift());
const paths = input
  .pop()
  .trim()
  .split(' ')
  .map((el) => Number(el) - 1);
const city = input.map((el) => el.trim().split(' ').map(Number));

const indexArr = new Array(n).fill(0);
for (let i = 1; i < n; i++) indexArr[i] = i;

for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    if (city[i][j] === 1) union(i, j);
  }
}

for (let i = 1; i < m; i++) {
  if (!findParent(paths[i - 1], paths[i])) {
    console.log('NO');
    return;
  }
}

console.log('YES');

function getParent(n) {
  if (indexArr[n] === n) return n;

  indexArr[n] = getParent(indexArr[n]);
  return indexArr[n];
}

function union(a, b) {
  const aParent = getParent(a);
  const bParent = getParent(b);
  if (aParent < bParent) indexArr[bParent] = aParent;
  else indexArr[aParent] = bParent;
}

function findParent(a, b) {
  const aParent = getParent(a);
  const bParent = getParent(b);

  if (aParent === bParent) return true;
  else return false;
}
