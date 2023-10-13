const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const input = fs.readFileSync(filePath).toString().trim();
const result = [];

for (let i = 0; i < input.length; i++) {
  let temp = input.substring(i);
  result.push(temp);
}

result.sort();
console.log(result.join("\n"));