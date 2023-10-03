var fs = require('fs');
var input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const arr = [];

const [N, M] = input[0].trim().split(" ");
for (let i = 1; i <= N; i++) {
  arr.push(i);
}

for (let i = 1; i < input.length; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  a = Number(a-1);
  b = Number(b-1);
  
  let reversed = arr.slice(a, b+1).reverse();

  arr.splice(a, b-a+1, ...reversed);
  //console.log(arr);
}

console.log(arr.join(" "));