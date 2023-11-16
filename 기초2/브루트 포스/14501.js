const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// const n = parseInt(input.shift());
// input = input.map((v) => v.trim().split(" ").map(Number));
let n = input.splice(0, 1);
let schedule = [];
let max = 0;
input.reduce((acc, cur) => {
  let tmp = cur.split(" ");
  schedule.push({ date: tmp[0] * 1, price: tmp[1] * 1 });
}, "");

let reSchedule = function (schedule, start, n, sum) {
  for (let i = start; i < n; i++) {
    if (i + schedule[i].date <= n)
      reSchedule(schedule, i + schedule[i].date, n, sum + schedule[i].price);
    else max = Math.max(max, sum);
  }
  max = Math.max(max, sum);
  return;
};

reSchedule(schedule, 0, n, 0);
console.log(max);

// let answer = 0;
// for (let i = 0; i < n; i++) {
//   let [start, startMoney] = input[i];
//   if (start + i > n) {
//     break;
//   }
//   let end = i + start;
//   if (end > n) {
//     end = n;
//   }
//   let daySum = 0;
//   let moneySum = 0;
//   for (let j = i + 1; j < end; j++) {
//     daySum += input[j][0];
//     moneySum += input[j][1];
//   }
//   if (start <= daySum) {
//     if (daySum - start === 1 && input[i + 1][1] > startMoney) {
//       answer += input[i + 1][1];
//       i += input[i + 1][0] - 1;
//     } else {
//       answer += startMoney;
//       i += start - 1;
//     }
//   }
//   if (start === 1) {
//     answer += startMoney;
//   }
// }
// console.log(answer);
