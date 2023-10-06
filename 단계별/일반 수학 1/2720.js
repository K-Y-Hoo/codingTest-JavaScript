const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const [t, ...inputs] = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < t; i++) {
  let total = Number(inputs[i]);
  let value = [0, 0, 0, 0];
  value[0] = Math.floor(total / 25);
  total = total % 25;
  value[1] = Math.floor(total / 10);
  total = total % 10;
  value[2] = Math.floor(total / 5);
  total = total % 5;
  value[3] = total;
  console.log(value.join(' '));
  
}