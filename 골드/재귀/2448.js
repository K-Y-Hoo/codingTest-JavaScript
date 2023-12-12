const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim();
let n = parseInt(input);

function top(x) {
  // if (!Array.isArray(x)) {
  //   return null;
  // }
  let blank = " ".repeat(Math.floor((x[0].length + 1) / 2));
  return x.map((i) => {
    return blank + i + blank;
  });
}

function bottom(x) {
  if (!Array.isArray(x)) {
    return null;
  }
  return x.map((i) => {
    return i + " " + i;
  });
}

function star(n) {
  if (n === 3) {
    return ["  *  ", " * * ", "*****"];
  }
  n = Math.floor(n / 2);
  const x = star(n);
  return [...top(x), ...bottom(x)];
}

console.log(star(n).join("\n"));
