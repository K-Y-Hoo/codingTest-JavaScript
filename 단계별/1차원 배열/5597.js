var fs = require('fs');
var input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const nums = input.map((num) => Number(num));

solution(nums);

function solution(nums) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], 1);
  }
  
  for (let i = 1; i <= 30; i++) {
    if (!map.has(i)) {
      console.log(i);
    }
  }
  
}

