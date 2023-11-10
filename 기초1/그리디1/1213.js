const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("");

let table = new Map();
for (let s of input) {
  if (table.has(s)) {
    table.set(s, table.get(s) + 1);
  } else {
    table.set(s, 1);
  }
}
// console.log(...table);
// console.log(Object.values([...table]));
table = [...table].sort((a, b) => a[0].localeCompare(b[0]));
//console.log(table);

// let s = ["B", "A"];
// console.log(s.sort((a, b) => a.localeCompare(b)));
let oddCnt = 0;
let oddChar = "";
for (const [key, value] of table) {
  if (value % 2) {
    oddCnt++;
    oddChar = key;
  }
}

if (oddCnt > 1) {
  console.log("I'm Sorry Hansoo");
  return;
}

let start = "";
let end = "";

for (const [key, value] of table) {
  let temp = "";
  for (let i = 0; i < Math.floor(value / 2); i++) {
    temp += key;
  }
  start += temp;
}
end = start.split("").reverse().join("");

if (oddCnt === 1) {
  console.log(start + oddChar + end);
} else {
  console.log(start + end);
}
