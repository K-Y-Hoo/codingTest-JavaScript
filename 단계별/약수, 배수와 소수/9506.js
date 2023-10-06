const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

let i = 0;

while (inputs[i] !== "-1") {
  num = Number(inputs[i]);
  const result = [];
  for (let j = 1; j < num; j++) {
    if (num % j === 0) {
      result.push(j);
    }
  }
  let sum = 0;
  result.map(n => sum += n);
  if (sum === num) {
    console.log(`${num} = ${result.join(" + ")}`);
  } else {
    console.log(`${num} is NOT perfect.`);
  }



  i++;
}