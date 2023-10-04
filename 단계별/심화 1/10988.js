const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const input = fs.readFileSync(filePath).toString().trim().split(" ");
const str = input[0];
const check = (str) => {
  for (let i = 0; i< Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length -1 -i]) {
      return false;
    }
  }
  return true;
}
console.log(check(str) === true ? 1 : 0);
