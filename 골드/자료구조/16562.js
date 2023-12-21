const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m, k] = input.shift().trim().split(" ").map(Number);
const money = input.shift().trim().split(" ").map(Number);
money.unshift(null);
const parents = Array.from(Array(n + 1), () => []);
const visited = Array.from(Array(n + 1), () => false);

for (let i = 0; i < input.length; i++) {
  const [x, y] = input[i].trim().split(" ").map(Number);
  parents[x].push(y);
  parents[y].push(x);
}

const q = [];
let result = 0;
console.log(parents);

for (let i = 1; i < n + 1; i++) {
  if (visited[i]) continue;
  q.push(i);
  visited[i] = true;
  let min = money[i];
  while (q.length) {
    const now = q.shift();
    const nowMoney = money[now];
    min = Math.min(min, nowMoney);
    const list = parents[now];
    for (let j = 0; j < list.length; j++) {
      const next = list[j];
      if (visited[next]) continue;
      visited[next] = true;
      q.push(next);
    }
  }
  result += min;
}

console.log(result > k ? "Oh no" : result);
