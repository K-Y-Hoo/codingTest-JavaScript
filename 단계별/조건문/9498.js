var fs = require('fs');
var input = fs.readFileSync('dev/stdin').toString().trim().split(' ');
var score = parseInt(input[0]);
var grade = '';
if (score >= 90) {
  grade = 'A';
} else if (score >= 80) {
  grade = 'B';
} else if (score >= 70) {
  grade = 'C';
} else if (score >= 60) {
  grade = 'D';
} else {
  grade = 'F';
}
console.log(grade);