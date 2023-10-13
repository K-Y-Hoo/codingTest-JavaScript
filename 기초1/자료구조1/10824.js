const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const [a,b,c,d] = fs.readFileSync(filePath).toString().trim().split(" ");
let before = a + b;
let after = c + d;
before = parseInt(before);
after = parseInt(after);
console.log(before+after);

