const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
let n = fs.readFileSync(filePath).toString().trim().split("").map(Number);

n.sort( (a,b) => b - a);
console.log(n.join(""));
