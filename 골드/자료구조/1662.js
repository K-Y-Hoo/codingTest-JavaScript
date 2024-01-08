const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const str = fs.readFileSync(filePath).toString().trim();

let answer = 0;
const stack = [];

for (let i = 0; i < str.length; i++) {
  if (str[i] !== ")") {
    if (str[i] === "(") stack.push(str[i]);
    else stack.push(parseInt(str[i]));
  } else {
    let length = 0;
    while (stack.length) {
      const pop = stack.pop();
      if (pop === "(") break;
      else {
        if (pop >= 10) length += pop - 10;
        else length += 1;
      }
    }
    length = length * stack[stack.length - 1] + 10;
    stack.pop();
    stack.push(length);
  }
}

for (let i = 0; i < stack.length; i++) {
  if (stack[i] >= 10) answer += stack[i] - 10;
  else answer += 1;
}

console.log(answer);
