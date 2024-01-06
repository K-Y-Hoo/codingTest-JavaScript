const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim();

const arr = [];
const popList = [];
for (let i = 0; i < input.length; i++) {
  if (input[i] === "(") popList.push(i);
  else if (input[i] === ")") arr.push([popList.pop(), i]);
}

// console.log(arr);

const numList = Array.from({ length: arr.length }, (_, i) => i);
const result = new Set();

function combination(array, current = [], index = 0) {
  if (index === array.length) {
    const value = input.split("");
    current.forEach((el) => {
      value[arr[el][0]] = "";
      value[arr[el][1]] = "";
    });
    result.add(value.join(""));
    return;
  }

  combination(array, current, index + 1);
  combination(array, current.concat(array[index]), index + 1);
}

combination(numList);

console.log([...result].slice(1, result.size).sort().join("\n"));
