const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.pop();

const vacations = input.map((vacation) => vacation.split(" ").map(Number));

vacations.forEach((vacation, idx) => {
  console.log(`Case ${idx + 1}: ${solution(vacation)}`);
});

function solution(arr) {
  const [L, P, V] = arr;
  let temp = V % P > L ? L : V % P;
  return Math.floor(V / P) * L + temp;
}
