var fs = require('fs');
var input = fs.readFileSync('dev/stdin').toString().trim().split(' ');
var hour = parseInt(input[0]);
var minute = parseInt(input[1]);

var total;
var result;

total = hour * 60 + minute;
result = total - 45;

if (hour === 0 && minute < 45) {
  console.log(23, 60-Math.abs(45-minute));
} else {
  console.log(Math.floor((result)/60), (result)%60);
}