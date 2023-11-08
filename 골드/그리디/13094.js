const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = parseInt(input.shift());
input = input.map((i) => i.trim().split(" ").map(Number));
const dueDay = input.map((i) => i[0]);
const maxDue = Math.max(...dueDay);
let answer = 0;
input.sort((a, b) => {
  if (a[0] - b[0] === 0) {
    return b[1] - a[1];
  }
  return b[0] - a[0];
});
//console.log(input);

for (let i = maxDue; i > 0; i--) {
  let temp = [];
  for (let j = 0; j < input.length; j++) {
    //console.log(input[j]);
    if (input[j][0] >= i) {
      temp.push(input[j]);
    }
  }
  //console.log(temp);
  if (temp.length) {
    temp.sort((a, b) => b[1] - a[1]);
    const [x, y] = temp[0];

    answer += y;
    for (let k = 0; k < input.length; k++) {
      if (input[k][0] === x && input[k][1] === y) {
        input.splice(k, 1);
        break;
      }
    }
  }
}
console.log(answer);
