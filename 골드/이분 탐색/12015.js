const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

n = parseInt(n);
const arr = input[0].split(" ").map(Number);
const list = [];

function binarySearch(start, end, target) {
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (list[mid] < target) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return end;
}

list[0] = arr[0];
let i = 1;
let j = 0;

while (i < n) {
  if (list[j] < arr[i]) {
    list[++j] = arr[i];
  } else {
    let index = binarySearch(0, j, arr[i]);
    list[index] = arr[i];
  }
  i++;
}

console.log(list.length);
