const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = parseInt(input.shift());

const tree = Array.from(Array(n + 1), () => new Array());
input.map((el) => {
  const [from, to] = el.trim().split(" ").map(Number);
  tree[from].push(to);
  tree[to].push(from);
});

let check = Array(n + 1).fill(0);

function bfs() {
  const q = [];
  check[1] = 1;
  for (let next of tree[1]) {
    check[next] = 1;
    q.push(next);
  }
  while (q.length) {
    const node = q.shift();
    for (let next of tree[node]) {
      if (check[next]) continue;
      check[next] = node;
      q.push(next);
    }
  }
}

bfs();

check = check.slice(2);
let answer = "";
check.map((el) => (answer += `${el}\n`));
console.log(answer);
