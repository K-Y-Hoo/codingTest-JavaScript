const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
let n = fs.readFileSync(filePath).toString();
let numN = Number(n);

for (let i = 1; i <= numN; i++) {
  let sum = 0;
  for (j = 0; j < String(i).length; j++) {
    sum += Number(String(i)[j]);
  }
  if (sum + i === numN) {
    console.log(i);
    return;
  }
}
console.log(0);
