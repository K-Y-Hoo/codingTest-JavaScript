const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
let n = fs.readFileSync(filePath).toString();
n = Number(n);


let num = 665;

while (n > 0) {
  num++;
  if (num.toString().includes('666')) {
    n--;
  }
}
console.log(num);