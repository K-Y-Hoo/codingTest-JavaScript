const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, k] = input.shift().trim().split(" ").map(Number);
let arr = input[0].split("").map(Number);
let stack = [];
for (let i = 0; i < arr.length; i++) {
  if (stack.length === 0) {
    stack.push(arr[i]);
  } else {
    while (k > 0 && arr[i] > stack[stack.length - 1]) {
      stack.pop();
      k--;
    }
    stack.push(arr[i]);
  }
  console.log(stack);
}
while (k > 0) {
  stack.pop();
  k--;
}
console.log(stack.join(""));

// let sum = 0;
// for (str of input[0]) {
//   sum += Number(str);
// }
// let average = sum / n;

// let arr = input[0].split("").map(Number);
// let answer = [];

// while (arr.length) {
//   if (arr[0] < average && k > 0) {
//     arr.shift();
//     k--;
//   } else if (arr[0] >= average) {
//     answer.push(arr.shift());
//   } else if (arr[0] < average && k === 0) {
//     answer.push(arr.shift());
//   }
// }

// console.log(answer.join(""));
