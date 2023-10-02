var fs = require('fs');
const [input, n] = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const inputArr = input.trim().split(" ");
var N = parseInt(n);
var hour = parseInt(inputArr[0]);
var minute = parseInt(inputArr[1]);

var total = hour * 60 + minute;
total = total + N;

if (total >= 1440) {
  console.log(Math.floor(total/60)-24, (minute + N) % 60);
} else {
  console.log(Math.floor(total/60), total%60);
}