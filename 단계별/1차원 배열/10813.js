var fs = require('fs');
var input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(" ").map(el => +el);
let arr = new Array(N);
for (let i = 0; i < arr.length; i++) {
  arr[i] = i+1;
}


for (let i = 1; i <= M; i++) {
  const[a, b] = input[i].split(" ").map(el => +el);
  var temp = arr[a-1];
  arr[a-1] = arr[b-1];
  arr[b-1] = temp;
}

console.log(arr.join(" "));