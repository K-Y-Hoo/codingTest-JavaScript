const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const arr = [];
let scoreSum = 0;
let total = 0;
for (let i = 0; i < 20; i++) {
  const [a, score, grade] = input[i].trim().split(" ");
  arr.push([score, grade]);
  
  if (arr[i][1] !== 'P') {
    scoreSum += Number(arr[i][0]);
  } 
  if (arr[i][1] === 'A+') {
    total += Number(arr[i][0]) * 4.5;
  } else if (arr[i][1] === 'A0') {
    total += Number(arr[i][0]) * 4.0;
  } else if (arr[i][1] === 'B+') {
    total += Number(arr[i][0]) * 3.5;
  } else if (arr[i][1] === 'B0') {
    total += Number(arr[i][0]) * 3.0;
  } else if (arr[i][1] === 'C+') {
    total += Number(arr[i][0]) * 2.5;
  } else if (arr[i][1] === 'C0') {
    total += Number(arr[i][0]) * 2.0;
  } else if (arr[i][1] === 'D+') {
    total += Number(arr[i][0]) * 1.5;
  } else if (arr[i][1] === 'D0') {
    total += Number(arr[i][0]) * 1.0;
  } else if (arr[i][1] === 'F') {
    total += Number(arr[i][0]) * 0.0;
  }

}
console.log(total / scoreSum);


/*let sum = 0;
let total = 0;

const table = {
	"A+": 4.5, A0: 4.0,
	"B+": 3.5, B0: 3.0,
	"C+": 2.5, C0: 2.0,
	"D+": 1.5, D0: 1.0,
	F: 0.0
} // key-value 로 저장해둔평점

for(let [sub, score, grade] of infos) {
   
  let num = 0;
  
 if(grade==='P') {
      continue;
  } // p일 경우 빼고 계산
  sum += Number(score)*table[grade] // 학점에 따라서 key 값으로 table에서 빼와서 계산
  total += Number(score); // total 값 저장
} 
console.log(sum/total)*/