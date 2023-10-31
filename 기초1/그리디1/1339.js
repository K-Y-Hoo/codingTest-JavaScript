const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = parseInt(input[0]);
input = input.slice(1);
let hashMap = new Map();
let count = 0;
let current = 9;
let answer = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < input[i].length; j++) {
    count = Math.pow(10, input[i].length - (j + 1));
    hashMap.set(input[i][j], (hashMap.get(input[i][j]) || 0) + count);
  }
}
//console.log(hashMap);

const sortedMap = new Map([...hashMap.entries()].sort((a, b) => b[1] - a[1]));

//console.log(sortedMap);

for (let [_, alphabet] of sortedMap) {
  answer += current * alphabet;
  current--;
}

console.log(answer);
