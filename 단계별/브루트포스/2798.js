const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
let inputs = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, m] = inputs[0].split(" ").map(Number);
let cards = inputs[1].split(" ").map(Number);
let temp = 0;
let result = [];
for (let i = 0; i < n; i++) {
  for (let j = i+1; j < n; j++) {
    for (let k = j+1; k < n; k++) {
      temp = cards[i] + cards[j] + cards[k];
      if (temp <= m) {
        result.push(temp);
      }
    }
  }
}
//console.log(result);
console.log(Math.max(...result));

/*
const getCombinations = (array, selectNumber) => {
   const results = [];
   if(selectNumber === 1){
      return array.map((element) => [element]);
   }
   array.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const combinations = getCombinations(rest, selectNumber - 1);
      const attached = combinations.map((combination) => [fixed, ...combination]);
      results.push(...attached);
   });
   return results;
}

getCombinations(cards, 3).forEach((element) => {
   let sum = element[0] + element[1] + element[2];
   let gap = M - sum;
   if(gap >= 0 && answer <= sum){
      answer = sum;
   }
});
console.log(answer);
 */