var fs = require('fs');
var input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const t = Number(input[0].trim());

for (let i = 1; i<=t; i++) {
  const [n, str] = input[i].trim().split(" ");
  let newStr = '';
  for (let k = 0; k<str.length; k++) {
    for (let j = 0; j<Number(n); j++) {
      newStr += str[k];
    }
  }
  console.log(newStr);
}
