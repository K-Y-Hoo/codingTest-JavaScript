const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const n = fs.readFileSync(filePath).toString().trim();
let num = BigInt(n);
console.log(`${num * num * num}`);
console.log(3);