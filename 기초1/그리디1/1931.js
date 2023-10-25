const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
[n, ...arr] = input;
n = Number(n);
arr = arr.map((i) => i.split(" ").map(Number));
arr.sort((a, b) => {
  if (a[1] - b[1] === 0) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});
console.log(arr);

let [tempStart, tempEnd] = arr.shift();
let count = 1;

for (let i = 0; i < n - 1; i++) {
  const [curStart, curEnd] = arr[i];
  if (curStart >= tempEnd) {
    tempStart = curStart;
    tempEnd = curEnd;
    count++;
    //console.log(tempStart, tempEnd);
  }
}
console.log(count);
