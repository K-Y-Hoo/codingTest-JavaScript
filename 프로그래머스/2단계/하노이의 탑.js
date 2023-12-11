function solution(n) {
  let answer = [];

  function recur(n, from, to, via) {
    if (n === 1) answer.push([from, to]);
    else {
      recur(n - 1, from, via, to);
      answer.push([from, to]);
      recur(n - 1, via, to, from);
    }
  }
  recur(n, 1, 3, 2);
  return answer;
}
