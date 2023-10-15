const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
let input = fs.readFileSync(filePath).toString().trim();
let oct = "";
while (input.length >= 3) {
  oct = parseInt(input.slice(input.length-3), 2).toString(8) + oct;
  input = input.slice(0, input.length-3);
  //console.log(input ,oct)
}
console.log((input ? parseInt(input, 2).toString(8) : "") + oct);

