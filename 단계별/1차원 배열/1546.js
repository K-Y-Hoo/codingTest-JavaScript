var fs = require('fs');
var input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const N = Number(input[0].trim());
const scores = input[1].trim().split(" ").map(Number);
const max = Math.max(...scores);

const arr = scores.map(score => score/max*100);

let sum = 0;
for (let i=0; i<arr.length; i++) {
  sum += arr[i];
}

console.log(sum / N);