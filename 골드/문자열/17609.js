const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const t = parseInt(input.shift());
const result = [];

function check(word, left, right) {
  while (left < right) {
    if (word[left] === word[right]) {
      left++;
      right--;
    } else return false;
  }
  return true;
}

function sol(word) {
  let left = 0;
  let right = word.length - 1;

  while (left < right) {
    if (word[left] === word[right]) {
      left++;
      right--;
    } else {
      if (check(word, left + 1, right) || check(word, left, right - 1))
        return 1;
      return 2;
    }
  }
  return 0;
}

for (let i = 0; i < t; i++) {
  const str = input[i].trim();
  result.push(sol(str));
}
console.log(result.join("\n"));

// for (let i = 0; i < t; i++) {
//   let str = input[i].trim();
//   if (str.split("").reverse().join("") === str) result.push(0);
//   else {
//     let flag = true;
//     for (let j = 0; j < str.length; j++) {
//       let temp = str.slice(0, j) + str.slice(j + 1, str.length);
//       if (temp.split("").reverse().join("") === temp) {
//         result.push(1);
//         flag = false;
//         break;
//       }
//     }
//     if (flag) result.push(2);
//   }
// }
// console.log(result.join("\n"));
