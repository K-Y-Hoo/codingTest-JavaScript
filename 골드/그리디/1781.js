const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = parseInt(input.shift());
const arr = [];
for (let i = 0; i < input.length; i++) {
  arr.push(input[i].trim().split(" ").map(Number));
}

const xValues = arr.map((i) => {
  return i[0];
});

const maxD = Math.max(...xValues);
//console.log(arr);

let answer = 0;

//const copy = [...arr];

for (let i = maxD; i > 0; i--) {
  const tempArr = [];
  for (let j = 0; j < arr.length; j++) {
    if (arr[j][0] >= i) {
      tempArr.push(arr[j]);
    }
  }

  if (tempArr.length) {
    tempArr.sort((a, b) => b[1] - a[1]);
    //console.log(tempArr);
    let [x, y] = tempArr[0];
    answer += y;
    for (let k = 0; k < arr.length; k++) {
      if (arr[k][1] === y && arr[k][0] === x) {
        arr.splice(k, 1);
        break;
      }
    }
  }
}

console.log(answer);
