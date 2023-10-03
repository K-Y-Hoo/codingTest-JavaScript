const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i<input.length; i++) {
  console.log(input[i]);
}

/*const input = fs.readFileSync(filePath).toString();
  console.log(input); */