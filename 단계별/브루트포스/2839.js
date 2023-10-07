const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
let n = parseInt(fs.readFileSync(filePath).toString());

let count = 0;
while (true) {
  if (n % 5 === 0) {
    console.log(n / 5 + count);
    break;
  }
  if (0 > n) {
    console.log(-1);
    break;
  }

  count++;
  n -= 3;
}

