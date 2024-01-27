const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number);
const board = input.map((el) => el.trim().split(' ').map(Number));

const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
};

const house = [];
const chicken = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j] === 1) house.push([i, j]);
    else if (board[i][j] === 2) chicken.push([i, j]);
  }
}

const newChicken = getCombinations(chicken, m);

const answer = [];
for (chickenArray of newChicken) {
  let total = 0;
  for (let [x, y] of house) {
    let min = Infinity;
    for (let [dx, dy] of chickenArray) {
      min = Math.min(min, Math.abs(x - dx) + Math.abs(y - dy));
    }
    total += min;
  }
  answer.push(total);
}
console.log(Math.min(...answer));
