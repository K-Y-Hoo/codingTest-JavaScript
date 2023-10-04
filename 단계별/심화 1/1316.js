const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(input[0]);
let countGroup = 0;

for (let i = 1; i <= n; i++) {
  const word = input[i];
  const letter = [];
  let isGroup = true;

  for (let j = 0; j < word.length; j++) {
    if (letter.indexOf(word[j]) === -1) {
      letter.push(word[j]);
    } else {
      if (letter.indexOf(word[j]) !== letter.length - 1) {
        isGroup = false;
        break;
      }
    }
  }
  if (isGroup) {
    countGroup += 1;
  }
}
console.log(countGroup);
