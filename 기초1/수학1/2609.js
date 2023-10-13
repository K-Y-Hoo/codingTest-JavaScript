const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
let [a, b] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let i = a;
let j = b;

while (i % j !== 0) {
    let n = i % j;
    if (n !== 0) {
        i = j;
        j = n;
    }
}
console.log(j)
console.log(a*b/j)