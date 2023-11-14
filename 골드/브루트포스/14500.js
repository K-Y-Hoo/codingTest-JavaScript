const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let [size, ...inputs] = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = size.split(" ").map(Number);
inputs = inputs.map((input) => input.trim().split(" ").map(Number));
let answer = 0;
answer = Math.max(
  tetro1(inputs),
  tetro2(inputs),
  tetro3(inputs),
  tetro4(inputs),
  tetro5(inputs)
);
console.log(answer);

function tetro1(arr) {
  let sum1 = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m - 3; j++) {
      sum1 = Math.max(
        sum1,
        arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i][j + 3]
      );
    }
  }
  let sum2 = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n - 3; j++) {
      sum2 = Math.max(
        sum2,
        arr[j][i] + arr[j + 1][i] + arr[j + 2][i] + arr[j + 3][i]
      );
    }
  }
  return Math.max(sum1, sum2);
}

function tetro2(arr) {
  let sum1 = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < m - 1; j++) {
      sum1 = Math.max(
        sum1,
        arr[i][j] + arr[i][j + 1] + arr[i + 1][j] + arr[i + 1][j + 1]
      );
    }
  }
  return sum1;
}

function tetro3(arr) {
  let sum1 = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < m - 2; j++) {
      sum1 = Math.max(
        sum1,
        arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j]
      );
    }
  }
  let sum2 = 0;
  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < m - 1; j++) {
      sum2 = Math.max(
        sum2,
        arr[i][j] + arr[i][j + 1] + arr[i + 1][j + 1] + arr[i + 2][j + 1]
      );
    }
  }
  let sum3 = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < m - 2; j++) {
      sum3 = Math.max(
        sum3,
        arr[i][j + 2] + arr[i + 1][j] + arr[i + 1][j + 1] + arr[i + 1][j + 2]
      );
    }
  }
  let sum4 = 0;
  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < m - 1; j++) {
      sum4 = Math.max(
        sum4,
        arr[i][j] + arr[i + 1][j] + arr[i + 2][j] + arr[i + 2][j + 1]
      );
    }
  }
  let sum5 = 0;
  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < m - 1; j++) {
      sum5 = Math.max(
        sum5,
        arr[i][j + 1] + arr[i + 1][j + 1] + arr[i + 2][j + 1] + arr[i + 2][j]
      );
    }
  }
  let sum6 = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < m - 2; j++) {
      sum6 = Math.max(
        sum6,
        arr[i][j] + arr[i + 1][j] + arr[i + 1][j + 1] + arr[i + 1][j + 2]
      );
    }
  }
  let sum7 = 0;
  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < m - 1; j++) {
      sum7 = Math.max(
        sum7,
        arr[i][j] + arr[i][j + 1] + arr[i + 1][j] + arr[i + 2][j]
      );
    }
  }
  let sum8 = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < m - 2; j++) {
      sum8 = Math.max(
        sum8,
        arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 2]
      );
    }
  }
  return Math.max(sum1, sum2, sum3, sum4, sum5, sum6, sum7, sum8);
}

function tetro4(arr) {
  let sum1 = 0;
  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < m - 1; j++) {
      sum1 = Math.max(
        sum1,
        arr[i][j] + arr[i + 1][j] + arr[i + 1][j + 1] + arr[i + 2][j + 1]
      );
    }
  }
  let sum2 = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < m - 2; j++) {
      sum2 = Math.max(
        sum2,
        arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j] + arr[i + 1][j + 1]
      );
    }
  }
  let sum3 = 0;
  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < m - 1; j++) {
      sum3 = Math.max(
        sum3,
        arr[i][j + 1] + arr[i + 1][j] + arr[i + 1][j + 1] + arr[i + 2][j]
      );
    }
  }
  let sum4 = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < m - 2; j++) {
      sum4 = Math.max(
        sum4,
        arr[i][j] + arr[i][j + 1] + arr[i + 1][j + 1] + arr[i + 1][j + 2]
      );
    }
  }
  return Math.max(sum1, sum2, sum3, sum4);
}

function tetro5(arr) {
  let sum1 = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < m - 2; j++) {
      sum1 = Math.max(
        sum1,
        arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1]
      );
    }
  }
  let sum2 = 0;
  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < m - 1; j++) {
      sum2 = Math.max(
        sum2,
        arr[i][j + 1] + arr[i + 1][j] + arr[i + 1][j + 1] + arr[i + 2][j + 1]
      );
    }
  }
  let sum3 = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < m - 2; j++) {
      sum3 = Math.max(
        sum3,
        arr[i][j + 1] + arr[i + 1][j] + arr[i + 1][j + 1] + arr[i + 1][j + 2]
      );
    }
  }
  let sum4 = 0;
  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < m - 1; j++) {
      sum4 = Math.max(
        sum4,
        arr[i][j] + arr[i + 1][j] + arr[i + 1][j + 1] + arr[i + 2][j]
      );
    }
  }
  return Math.max(sum1, sum2, sum3, sum4);
}
