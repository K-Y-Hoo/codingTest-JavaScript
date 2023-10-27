const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let s = input.shift().trim();
let t = input.shift().trim();
let answer = 0;

for (let i = 0; i < 1002; i++) {
  if (t === s) {
    answer = 1;
    break;
  }

  if (t[t.length - 1] === "A") {
    t = t.substring(0, t.length - 1);
    //console.log(t);
  } else if (t[t.length - 1] === "B") {
    t = t
      .substring(0, t.length - 1)
      .split("")
      .reverse()
      .join("");
    //console.log(t);
  }
}

console.log(answer);
