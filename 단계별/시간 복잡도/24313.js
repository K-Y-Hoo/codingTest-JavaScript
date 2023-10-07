const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
let [input, c, n] = fs.readFileSync(filePath).toString().trim().split("\n");
const [a, b] = input.split(" ").map(Number);
c = Number(c);
n = Number(n);

console.log(+(b <= (c-a) * n && c>=a));