const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
let [a, b] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);
const prime = {1: true};
const result = [];
for (let i = 2; i <= Math.ceil(Math.sqrt(b)); i++) {
  if (prime[i]) {
    continue;
  }

  for (let j = i**2; j <= b; j+=i) {
    prime[j] = true;
  }
}
console.log(prime)
for (let i = a; i<=b; i++) {
  if (!prime[i]) {
    result.push(i);
  }
}

console.log(result.join("\n"));
