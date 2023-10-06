const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");
let i = 0;
while (inputs[i].split(" ")[0] !== '0' && inputs[i].split(" ")[1] !== '0') {
  let [a, b] = inputs[i].split(" ").map(Number);
  //console.log(a,b);
  if (b % a === 0) {
    console.log("factor");
  } else if (a % b === 0) {
    console.log("multiple");
  } else {
    console.log("neither");
  }

  i++;
}