


const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");
let lStack = inputs[0].split("");
let rStack = [];
let n = parseInt(inputs[1]);

for (let i = 2; i < 2 + n; i++) {
  let [order, value] = inputs[i].split(" ");
  if (order === 'L' && lStack.length) {
    rStack.push(lStack.pop()); 
  } else if (order === 'D' && rStack.length) {
    lStack.push(rStack.pop());
  } else if (order === 'B') {
    lStack.pop();
  } else if (order === 'P') {
    lStack.push(value);
  }
}

let result = lStack.join("");
result += rStack.reverse().join("");
console.log(result);

/*const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");
let strin = inputs.shift();
const str = strin.trim().split("");
const n = parseInt(inputs.shift());
let index = str.length;

  for (let i = 0; i < n; i++) {
  const operation = inputs[i].trim().split(" ");
  if (operation[0] === 'L') {
    if (index === 0) {
      continue;
    } else {
      index--;
    }
  } else if (operation[0] === 'D') {
    if (index === str.length) {
      continue;
    } else {
      index++;
    }
  } else if (operation[0] === 'B') {
    if (index === 0) {
      continue;
    } else {
      index = index - 1;
      str.splice(index, 1);
    }
  } else if (operation[0] === 'P') {
    str.splice(index,0,operation[1]);
    index++;
  }
}

console.log(str.join(""));*/

