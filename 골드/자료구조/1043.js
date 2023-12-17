const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [info, truth, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, m] = info.split(" ").map(Number);

if (truth == 0) {
  console.log(m);
  return;
}
const [k, ...truthArr] = truth.split(" ").map(Number);
const newTruth = [...truthArr];

const arr = [];
for (let i = 0; i < m; i++) {
  const [n, ...people] = input[i].split(" ").map(Number);
  arr.push(people);
}
let flag = true;
while (flag) {
  flag = false;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < newTruth.length; j++) {
      if (arr[i].includes(newTruth[j])) {
        for (let k = 0; k < arr[i].length; k++) {
          if (!newTruth.includes(arr[i][k])) {
            newTruth.push(arr[i][k]);
            flag = true;
          }
        }
      }
    }
  }
}

// console.log(newTruth);

let answer = 0;
for (let i = 0; i < m; i++) {
  const [n, ...people] = input[i].split(" ").map(Number);
  let flag = true;
  for (let j = 0; j < newTruth.length; j++) {
    if (people.includes(newTruth[j])) {
      flag = false;
      break;
    }
  }
  if (flag) {
    answer++;
  }
}
console.log(answer);
