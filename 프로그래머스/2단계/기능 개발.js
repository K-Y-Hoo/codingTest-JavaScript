function solution(progresses, speeds) {
  const answer = [];
  while (progresses.length) {
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }
    let cnt = 0;
    let length = progresses.length;

    for (let i = 0; i < length; i++) {
      if (progresses[0] >= 100) {
        cnt++;
        progresses.shift();
        speeds.shift();
      }
    }
    if (cnt !== 0) {
      answer.push(cnt);
    }
  }
  return answer;
}
