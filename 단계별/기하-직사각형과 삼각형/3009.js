const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

const xArr = [];
const yArr = [];

for (let i = 0; i < inputs.length; i++) {
  const [x, y] = inputs[i].split(" ").map(Number);
  xArr.push(x);
  yArr.push(y);
}

xArr.sort();
yArr.sort();
let ansX = 0;
let ansY = 0;
if (xArr[0] === xArr[1]) {
  ansX = xArr[2];
} else {
  ansX = xArr[0];
}

if (yArr[0] === yArr[1]) {
  ansY = yArr[2];
} else {
  ansY = yArr[0];
}

console.log(ansX, ansY);

/*
const fs = require('fs');
let X = 0, Y = 0;
fs.readFileSync('/dev/stdin').toString().split('\n').forEach((line) => {
    const [x, y] = line.split(' ').map(Number);
    X ^= x;
    Y ^= y;
})
console.log(X, Y);
*/