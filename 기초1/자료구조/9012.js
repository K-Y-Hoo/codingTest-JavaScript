const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");
let n = parseInt(inputs.shift());
const answer = [];
for (let i = 0; i < n; i++) {
  const arr = inputs[i].trim().split("");
  const temp = [];
  temp.push(arr[0]);

  if (temp[0] === ')') {
    answer.push('NO');
    continue;
  }

  for (let j = 1; j < arr.length; j++) {
    if (temp[0] === ')') {
      break;
    }
    if (temp.length === 0) {
      temp.push(arr[j]);
      continue;
    }
    if (temp[temp.length-1] === arr[j]) {
      temp.push(arr[j]);
    } else {
      temp.pop();
    }
  }
  //console.log(temp);
  if (temp.length === 0) {
    answer.push("YES");
  } else {
    answer.push("NO");
  }
}
console.log(answer.join("\n"));
