const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = parseInt(input.shift());
const weightLimit = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);
const m = parseInt(input.shift());
const boxes = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

if (boxes[0] > weightLimit[0]) {
  console.log(-1);
  return;
}

let answer = 0;

while (boxes.length) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (weightLimit[i] >= boxes[j]) {
        boxes.splice(j, 1);
        break;
      }
    }
  }
  answer++;
}

console.log(answer);

// while (boxes.length) {
//   const newLimit = new Array(...weightLimit);
//   boxes.sort((a, b) => b - a);
//   let count = 0;
//   while (newLimit.length) {
//     if (!boxes.length) {
//       break;
//     }
//     if (boxes[0] <= newLimit[0]) {
//       boxes.shift();
//       newLimit.shift();
//     } else {
//       let temp = boxes.shift();
//       boxes.push(temp);
//       count++;
//     }
//     if (Math.max(...newLimit) < Math.max(...boxes) && count > boxes.length) {
//       break;
//     }
//   }
//   answer++;
// }

// console.log(answer);
