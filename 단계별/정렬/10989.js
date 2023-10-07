const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const inputs = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
let n = inputs.shift();

const max = Math.max(...inputs);
const array = new Array(max+1).fill(0);

for (let i = 0; i<inputs.length; i++) {
  array[inputs[i]]++;
}

//console.log(array);

for (let i = 0; i < array.length; i++) {
  if (array[i]) {
    for (let j = 0; j < array[i]; j++) {
      console.log(i);
    }
  }
}