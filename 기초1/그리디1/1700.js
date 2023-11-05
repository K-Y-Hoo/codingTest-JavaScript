const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, k] = input.shift().split(" ").map(Number);
input = input[0].trim().split(" ").map(Number);
let multiTap = [];
let answer = 0;

for (let i = 0; i < k; i++) {
  const now = input[i];
  if (multiTap.includes(now)) continue;
  if (multiTap.length < n) {
    multiTap.push(now);
  } else {
    let target;
    let value = 0;
    multiTap.forEach((v) => {
      let next = Infinity;
      for (let j = i + 1; j < k; j++) {
        if (input[j] == v) {
          next = j;
          break;
        }
      }
      if (value < next) {
        target = v;
        value = next;
      }
    });
    multiTap = multiTap.filter((v) => v != target);
    multiTap.push(now);
    answer++;
  }
}

console.log(answer);

// let multiTap = [];

// for (let i = 0; i < n; i++) {
//   multiTap.push(input.shift());
// }

// let count = 0;

// while (input.length) {
//   let multiTapObj = {};
//   if (multiTap.includes(input[0])) {
//     input.shift();
//   } else if (!multiTap.includes(input[0])) {
//     for (let i = 0; i < multiTap.length; i++) {
//       multiTapObj[multiTap[i]] = 0;
//     }
//     for (let i = 1; i < input.length; i++) {
//       if (multiTap.includes(input[i])) {
//         multiTapObj[input[i]] += 1;
//       }
//     }
//     //console.log(multiTap);
//     //console.log(multiTapObj);

//     let minValue = Math.min(...Object.values(multiTapObj));

//     let key = getKeyByValue(multiTapObj, minValue);

//     if (key !== undefined && key !== NaN) {
//       // multiTap = multiTap.filter((el) => el !== key);
//       for (let i = 0; i < multiTap.length; i++) {
//         if (multiTap[i] == key) {
//           multiTap.splice(i, 1);
//           break;
//         }
//       }
//     } else if (key === undefined || key === NaN) {
//       multiTap.pop();
//     }

//     //console.log(multiTap);

//     multiTap.push(input.shift());

//     count++;
//   }
// }

// console.log(count);

// function getKeyByValue(obj, value) {
//   return Object.keys(obj).findLast((key) => obj[key] === value);
// }
