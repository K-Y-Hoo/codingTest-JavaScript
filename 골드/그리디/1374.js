const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = parseInt(input.shift());
let times = input.map((time) => {
  return { start: time.trim().split(" ")[1], end: time.trim().split(" ")[2] };
});
let max = 0;
let rooms = 0;
const startTimes = times.map((time) => {
  return { time: parseInt(time.start), isStart: 1 };
});

const endTimes = times.map((time) => {
  return { time: parseInt(time.end), isStart: -1 };
});

const sortedTimes = [...startTimes, ...endTimes].sort((a, b) =>
  a.time === b.time ? a.isStart - b.isStart : a.time - b.time
);

sortedTimes.forEach((time) => {
  rooms = time.isStart === 1 ? rooms + 1 : rooms - 1;
  if (max <= rooms) {
    max = rooms;
  }
});

console.log(max);
