var fs = require('fs');
var input = fs.readFileSync('dev/stdin').toString().trim().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
var c = parseInt(input[2]);
var max = Math.max(...input);

if (a === b && a === c) {
  console.log(10000 + a * 1000);
} else if (a !== b && b !== c && a !== c) {
  console.log(max * 100);
} else {
  if (a === b) {
    console.log(1000 + a*100);
  } else if (a === c) {
    console.log(1000 + a*100);
  } else if (b === c) {
    console.log(1000 + b*100);
  }

}