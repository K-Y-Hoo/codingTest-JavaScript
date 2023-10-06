const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
let [n, ...inputs] = fs.readFileSync(filePath).toString().trim().split("\n");
n = Number(n);
if (n === 1) {
  console.log(0);
  return;
}
let arrX = [];
let arrY = [];
for (let i = 0; i<n; i++) {
  let [x, y] = inputs[i].split(" ").map(Number);
  arrX.push(x);
  arrY.push(y);
}
console.log((Math.max(...arrX) - Math.min(...arrX)) * (Math.max(...arrY) - Math.min(...arrY)));