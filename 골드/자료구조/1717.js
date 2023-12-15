const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});

function solution(input) {
  const [n, m] = input.shift().split(" ").map(Number);
  const arr = input.map((el) => el.trim().split(" ").map(Number));
  const parents = new Array(n + 1).fill(-1);
  const answer = [];

  function find(x) {
    if (parents[x] < 0) return x;
    parents[x] = find(parents[x]);
    return parents[x];
  }

  function union(x, y) {
    x = find(x);
    y = find(y);
    if (x !== y) {
      parents[x] = y;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    const [fn, a, b] = arr[i];
    if (fn === 0) union(a, b);
    else answer.push(find(a) === find(b) ? "yes" : "no");
  }

  console.log(answer.join("\n"));
}
