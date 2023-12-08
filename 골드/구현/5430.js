const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const t = parseInt(input.shift());

const answer = [];

for (let i = 0; i < t; i++) {
  const funcs = input.shift();
  const n = parseInt(input.shift());
  let arrString = input.shift().trim();
  let arr =
    arrString !== "[]" ? arrString.slice(1, -1).split(",").map(Number) : [];

  let isReverse = false;
  let isErrorCalled = false;
  for (let func of funcs) {
    if (func === "R") {
      isReverse = !isReverse;
    } else if (func === "D") {
      if (arr.length !== 0 && !isReverse) {
        arr.shift();
      } else if (arr.length !== 0 && isReverse) {
        arr.pop();
      } else if (arr.length === 0) {
        console.log("error");
        isErrorCalled = true;
        break;
      }
    }
  }
  if (!isErrorCalled) {
    console.log(
      isReverse
        ? "[" + arr.reverse().join(",") + "]"
        : "[" + arr.join(",") + "]"
    );
  }
}
