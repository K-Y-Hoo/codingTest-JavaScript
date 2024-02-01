const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim();

let target = parseInt(input);
let cnt = 0;
while (target > 0) {
  if (target & 1) {
    cnt++;
  }
  target >>= 1;
}
console.log(cnt);
