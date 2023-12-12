function solution(s) {
  let lower = s.toLowerCase();
  const arr = lower.split(" ");

  let answer = "";

  const arr2 = arr.map((str) => str.charAt(0).toUpperCase() + str.slice(1));

  answer = arr2.join(" ");
  return answer;
}
