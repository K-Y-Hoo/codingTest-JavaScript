const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);
input.sort((a,b) => a-b);
const [a,b,c] = input;

if (a +b > c) {
  console.log(a+b+c);
} else {
  const newC = a+b -1;
  console.log(a + b +newC);
}