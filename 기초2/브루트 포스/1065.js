const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim();
const n = parseInt(input);

let answer = 0;
if (n < 100) {
  console.log(n);
  return;
} else {
  answer += 99;
}
for (let i = 100; i <= n; i++) {
  let stringedNum = String(i);
  let flag = true;
  let cnt = 0;
  let reverseCnt = 0;
  if (
    Math.abs(parseInt(stringedNum[0]) - parseInt(stringedNum[1])) !==
    Math.abs(parseInt(stringedNum[1]) - parseInt(stringedNum[2]))
  ) {
    flag = false;
  }
  for (let j = 0; j < stringedNum.length - 1; j++) {
    if (parseInt(stringedNum[j]) <= parseInt(stringedNum[j + 1])) {
      cnt++;
    } else {
      reverseCnt++;
    }
  }
  if (cnt !== stringedNum.length - 1 && reverseCnt !== stringedNum.length - 1) {
    flag = false;
  }

  if (flag) {
    //console.log(i);
    //console.log(cnt, reverseCnt);
    answer++;
  }
}

console.log(answer);
