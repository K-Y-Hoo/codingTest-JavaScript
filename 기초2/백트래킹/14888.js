const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const [n, num, cal] = fs.readFileSync(filePath).toString().trim().split('\n');

const numList = num.split(' ').map((el) => Number(el));

const calNumList = cal.split(' ').map((el) => Number(el));
const calList = [];
for (let i = 0; i < calNumList.length; i++) {
  if (i === 0) {
    for (let j = 0; j < calNumList[i]; j++) {
      calList.push('+');
    }
  } else if (i === 1) {
    for (let j = 0; j < calNumList[i]; j++) {
      calList.push('-');
    }
  } else if (i === 2) {
    for (let j = 0; j < calNumList[i]; j++) {
      calList.push('*');
    }
  } else if (i === 3) {
    for (let j = 0; j < calNumList[i]; j++) {
      calList.push('/');
    }
  }
}

const maxCalCnt = cal
  .split(' ')
  .map((el) => Number(el))
  .reduce((acc, cur) => acc + cur, 0);

const visited = new Array(maxCalCnt).fill(false);
const seq = new Array(maxCalCnt).fill('');

const result = new Set();

function dfs(k) {
  if (k === maxCalCnt) {
    let tempNum = numList[0];
    for (let i = 0; i < maxCalCnt; i++) {
      if (seq[i] === '+') {
        tempNum = tempNum + numList[i + 1];
      } else if (seq[i] === '-') {
        tempNum = tempNum - numList[i + 1];
      } else if (seq[i] === '*') {
        tempNum = tempNum * numList[i + 1];
      } else if (seq[i] === '/') {
        if (tempNum >= 0) tempNum = Math.floor(tempNum / numList[i + 1]);
        else {
          if (tempNum === -0) {
            tempNum = 0;
          } else {
            tempNum = Math.floor(Math.abs(tempNum) / numList[i + 1]) * -1;
          }
        }
      }
    }

    result.add(tempNum);
    return;
  }

  for (let i = 0; i < maxCalCnt; i++) {
    if (!visited[i]) {
      seq[k] = calList[i];
      visited[i] = true;
      dfs(k + 1);
      visited[i] = false;
    }
  }
}

dfs(0);
console.log(Math.max(...[...result]) + '\n' + Math.min(...[...result]));
