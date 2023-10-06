const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const [a, b, v] = fs.readFileSync(filePath).toString().trim().split(" ").map(el => Number(el));

console.log(Math.ceil((v-b) / (a-b)));