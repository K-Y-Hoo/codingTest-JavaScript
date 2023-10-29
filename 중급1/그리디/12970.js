const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let [N, K] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const temp = [];
let max = 0;

for (let i = 1; i < N; i++) {
  const a = i;
  const b = N - i;
  const cnt = a * b;

  temp.push([a, b, cnt]);

  max = max < cnt ? cnt : max;
}

if (max < K) {
  console.log(-1);
  return;
}

if (K === 0) {
  let str = "";
  for (let i = 0; i < N - 1; i++) {
    str += "B";
  }
  str += "A";

  console.log(str);
  return;
}

for (let i = 0; i < temp.length; i++) {
  const [a, b, cnt] = temp[i];

  if (cnt === K) {
    let answer = "";
    for (let i = 0; i < a; i++) answer += "A";
    for (let i = 0; i < b; i++) answer += "B";

    console.log(answer);
    return;
  }

  if (cnt > K) {
    stringify(a, b, K);
    break;
  }
}

function stringify(aCnt, bCnt, totalCnt) {
  let rest = totalCnt;
  let str = "";

  while (rest >= 0 && bCnt !== 0) {
    if (rest >= bCnt) {
      str += "A";
      rest -= bCnt;
    } else {
      str += "B";
      bCnt--;
    }

    if (rest === 0 && bCnt > 0) {
      for (let i = 0; i < bCnt; i++) {
        str += "B";
      }
      bCnt = 0;
    }
  }

  console.log(str);
  return;
}
