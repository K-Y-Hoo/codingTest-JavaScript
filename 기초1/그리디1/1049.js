const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(Number);
const packCeil = Math.ceil(n / 6);
const packFloor = Math.floor(n / 6);
let price = 0;
const packArr = [];
const singleArr = [];

for (let i = 0; i < m; i++) {
  let [package, single] = input[i].split(" ").map(Number);
  packArr.push(package);
  singleArr.push(single);
}

const minPack = Math.min(...packArr);
const minSingle = Math.min(...singleArr);

price = Math.min(
  n * minSingle,
  minPack * packCeil,
  packFloor * minPack + minSingle * (n % 6)
);

console.log(price);
