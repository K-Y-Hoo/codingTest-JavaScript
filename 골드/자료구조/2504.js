const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim();

function check(str) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const top = stack[stack.length - 1];
    const cur = str[i];

    if (cur === "]" && top === "[") {
      stack.pop();
    } else if (cur === ")" && top === "(") {
      stack.pop();
    } else {
      stack.push(cur);
    }
  }
  return stack.length ? true : false;
}

if (check(input)) {
  console.log(0);
  return;
}

const stack = [];

for (let i = 0; i < input.length; i++) {
  const top = stack[stack.length - 1];
  const cur = input[i];

  if (cur === "(" || cur === "[") {
    stack.push(cur);
  } else if (cur === ")" || cur === "]") {
    const reverse = cur === ")" ? "(" : "[";
    const point = reverse === "(" ? 2 : 3;
    if (top === reverse) {
      stack.pop();
      stack.push(point);
    } else {
      let temp = 0;
      while (true) {
        const pop = stack.pop();
        if (typeof pop === "number") {
          temp += pop;
        } else if (pop === reverse) {
          stack.push(temp * point);
          break;
        }
      }
    }
  }
  // console.log(stack);
}

console.log(stack.reduce((acc, cur) => acc + cur, 0));
