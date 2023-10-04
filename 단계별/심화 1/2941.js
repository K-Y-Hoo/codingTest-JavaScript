const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
//const input = fs.readFileSync(filePath).toString().trim();
//console.log(input.replace(/c=|c-|dz=|d-|lj|nj|s=|z=|./g, 'a').length);

let input = fs.readFileSync(filePath).toString().trim().split(' ');
input = input[0];

function sol(input) {
  const arr = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    while (input !== input.replace(arr[i], '')) {
      answer += 1;
      input = input.replace(arr[i], ' ');
    }
  }
  return answer+input.split(' ').join('').length;
}
console.log(sol(input));
