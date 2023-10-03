var fs = require('fs');
var input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

let nums = input.map(n => Number(n));

solution(nums);

function solution(numsArr) {
  const count = new Set(nums.map(n => n % 42));
  console.log(count.size);
}