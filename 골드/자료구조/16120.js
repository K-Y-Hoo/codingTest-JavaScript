const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim();

const stack = [];

for (let i = 0; i < input.length; i++) {
  stack.push(input[i]);
  if (stack.length >= 4) {
    if (stack.slice(-4, stack.length).join("") === "PPAP") {
      stack.splice(-4, stack.length);
      stack.push("P");
    }
  }
}

if (stack.join("") === "P") {
  console.log("PPAP");
} else {
  console.log("NP");
}
