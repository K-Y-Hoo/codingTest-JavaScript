const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const [x,y,w,h] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const arr = [[0,y], [x,0], [x,h], [w,y]];
const result = [];
function calLength(a,b) {
  return Math.sqrt((x-a)**2 + (y-b)**2);
}

for (let i = 0; i < arr.length; i++) {
  result.push(calLength(arr[i][0],arr[i][1]));
}
console.log(Math.min(...result));