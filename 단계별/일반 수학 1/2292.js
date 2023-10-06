const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const inputs = fs.readFileSync(filePath).toString().trim().split(" ");

//5 11 17 23

let range = 1; block = 1;

while (block < inputs[0]) {
  block += 6 * range;
  range++;
}

console.log(range);