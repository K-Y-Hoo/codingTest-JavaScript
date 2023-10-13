const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const inputs = fs.readFileSync(filePath).toString().trim().split("");

let stack = [];
let word = '';
let isTag = false;
let answer = '';

for (let str of inputs) {
  if (str === "<") {
    isTag = true;
    answer += word.split("").reverse().join("") + str;
    word = "";
  } else if (str === ">") {
    isTag = false;
    answer += word + str;
    word = "";
  } else if (str === " ") {
    answer += (!isTag? word.split("").reverse().join("") : word) + " ";
    word = "";
  } else {
    word += str;
  }
}

answer += word.split("").reverse().join("");
console.log(answer);
