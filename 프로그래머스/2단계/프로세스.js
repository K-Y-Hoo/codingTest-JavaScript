function solution(priorities, location) {
  const queue = [];
  const result = [];
  for (let i = 65; i < 65 + priorities.length; i++) {
    queue.push(String.fromCharCode(i));
  }
  const char = queue[location];
  const dict = new Map();
  for (let i = 0; i < priorities.length; i++) {
    dict.set(queue[i], priorities[i]);
  }

  while (result.length !== priorities.length) {
    const shifted = queue.shift();
    let flag = true;
    for (let i = 0; i < queue.length; i++) {
      if (dict.get(shifted) < dict.get(queue[i])) {
        queue.push(shifted);
        flag = false;
        break;
      }
    }
    if (flag) {
      result.push(shifted);
    }
  }

  return result.indexOf(char) + 1;
}
