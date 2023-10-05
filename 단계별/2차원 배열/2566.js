const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let arr = [];
let temp = [];
let resultTemp = [];

for (let i = 0; i < input.length; i++) {
  temp = input[i].split(" ").map(Number);
  arr.push(temp);
  resultTemp.push(Math.max(...temp));
}
let max = Math.max(...resultTemp);
console.log(max);

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[0].length; j++) {
    if (arr[i][j] === max) {
      console.log(i+1, j+1);
      break;
    }
  }
}

/*
const raws = require....
let max = 0;
let idx = [];

for(let k=0; k<9; k++) {
    for(let i=0; i<9; i++) {
        if(raws[k][i]>=max) {
            max = raws[k][i];
            idx=[k+1,i+1]
        }
    }
}
console.log(max)
console.log(idx.join(' '))
*/