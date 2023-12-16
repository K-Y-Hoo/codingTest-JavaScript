const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/);
const n = +input[0];
const arr = input.slice(1).map((v) => +v);
const sortedA = arr.slice().sort((a, b) => a - b);
const P = Array(n).fill(-1);
arr.forEach((v, i) => {
  P[i] = sortedA.findIndex((el, idx) => {
    if (el === v && !P.includes(idx)) return true;
  });
});
console.log(P.join(" "));
