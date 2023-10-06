const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
let inputs = fs.readFileSync(filePath).toString().trim().split(" ");
let n = Number(inputs);

let line = 0;
let max = 0;

while (max < n) {
  line++;
  max += line;
}

//console.log(max, line);
let idx = n - (max - line);
//console.log(idx);

if (line % 2 == 0) {
  child = idx;
  parents = (line + 1) - child;
} else {
  child = line + 1 - idx;
  parents = line + 1 - child;
}
console.log(child + '/' + parents);