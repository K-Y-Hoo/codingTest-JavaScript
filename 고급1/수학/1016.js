const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const [min, max] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let noSqrtArray = new Array(max - min + 1).fill(false);
let answer = max - min + 1;
const MAX = Math.floor(Math.sqrt(max));
let prime = new Array(MAX+1).fill(true);
let temp = Math.ceil(Math.sqrt(MAX));

prime[0] = false;
prime[1] = false;

for (let i = 2; i <= temp; i++) {
    if (!prime[i]) continue;
    let flag = true;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = false;
            break;
        }
    }

    if (flag) {
        for (let k = i * 2; k <= MAX; k += i ) {
            prime[k] = false;
        }
    }
}

const primeArray = [];
prime.forEach((boolean, index) => {
    if (boolean) {
        primeArray.push(index * index);
    }
})

primeArray.forEach((value) => {
    let start = min;
    if (start % value != 0) {
        start = (Math.floor(min / value) + 1) * value;
    }

    for (let i = start; i <= max; i += value) {
        if (!noSqrtArray[i - min]) {
            noSqrtArray[i - min] = true;
            answer--;
        }
    }
})

console.log(answer);