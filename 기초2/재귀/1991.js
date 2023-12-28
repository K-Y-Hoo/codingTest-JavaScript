const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input.shift());
let answer = "";
const tree = {};

for (let i = 0; i < n; i++) {
  const [node, left, right] = input[i].trim().split(" ");
  tree[node] = [left, right];
}

function pre(node) {
  if (node === ".") return;
  const [left, right] = tree[node];
  answer += node;
  pre(left);
  pre(right);
}

function middle(node) {
  if (node === ".") return;
  const [left, right] = tree[node];
  middle(left);
  answer += node;
  middle(right);
}

function post(node) {
  if (node === ".") return;
  const [left, right] = tree[node];
  post(left);
  post(right);
  answer += node;
}

pre("A");
answer += "\n";
middle("A");
answer += "\n";
post("A");
answer += "\n";

console.log(answer);
