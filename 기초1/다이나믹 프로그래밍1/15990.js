const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const t = input.shift();
var max = Math.max(...input);
var arr = [
  [0, 0, 0],
  [1, 0, 0],
  [0, 1, 0],
  [1, 1, 1],
];
for (var i = 4; i <= max; i++) {
  arr[i] = [
    (arr[i - 1][1] + arr[i - 1][2]) % 1000000009,
    (arr[i - 2][0] + arr[i - 2][2]) % 1000000009,
    (arr[i - 3][0] + arr[i - 3][1]) % 1000000009,
  ];
}
//console.log(arr);
for (var k = 0; k < t; k++) {
  console.log(arr[input[k]].reduce((a, v) => a + v, 0) % 1000000009);
}
