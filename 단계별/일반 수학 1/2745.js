const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const [n, b] = fs.readFileSync(filePath).toString().trim().split(" ");


let number = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const cal = (str, num) => {
  let answer = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    let temp = number.indexOf(str[i]) * num ** i;
    answer += temp;
  }
  return answer;
};

let str = n.split("").reverse().join("");
let num = Number(b);

console.log(cal(str, num));