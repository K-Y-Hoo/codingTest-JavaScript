const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim();
let n = parseInt(input);

let arr = [];
for (let i = 0; i <= n; i++) {
  arr.push(i);
}
for (let i = 1; i <= n; i++) {
  for (let j = 1; j ** 2 <= i; j++) {
    arr[i] = Math.min(arr[i], arr[i - j ** 2] + 1);
  }
}
console.log(arr);
console.log(arr.pop());
/*const max = Math.ceil(Math.sqrt(100000));

const d = new Array(max).fill(10001);

for (let i = 2; i < max; i++) {
  d[i ** 2] = 1;
}
d[0] = 0;
d[1] = 1;
d[2] = 2;
d[3] = 3;

for (let i = 5; i <= n; i++) {
  for (let j = 1; j <= Math.floor(i / 2); j++) {
    d[i] = Math.min(d[i - j] + d[j], d[i]);
  }
}

console.log(d, d[n]);
*/
