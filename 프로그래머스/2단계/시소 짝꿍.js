function solution(weights) {
  let answer = 0;
  const cal = [1, 3 / 2, 2, 4 / 3];
  const store = {};

  weights
    .sort((a, b) => b - a)
    .forEach((w) => {
      cal.forEach((i) => {
        let s = w * i;
        if (store[s]) {
          answer += store[s];
          // console.log(w, i, s)
        }
      });
      if (!store[w]) store[w] = 1;
      else store[w]++;
    });
  // console.log(store)
  return answer;
}
