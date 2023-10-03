var fs = require('fs');
var input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const alphas = ['a', 'b', 'c', 'd', 'e','f','g','h','i','j','k','l','m','n','o',
'p','q','r','s','t','u','v','w','x','y','z'];
const str = input[0].trim();
const result = [];

for (alpha of alphas) {
  if (str.includes(alpha)) {
    result.push(str.indexOf(alpha));
  } else {
    result.push(-1);
  }
}

console.log(result.join(" "));