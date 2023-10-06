const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const [a, b, c] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

if (a + b + c !== 180) {
  console.log('Error');
} else {
  if (a === b && b === c) {
    console.log('Equilateral');
  } else if (a !== b && b !== c && a !== c) {
    console.log('Scalene');
  } else {
    console.log('Isosceles');
  }
}




