function solution(str1, str2) {
  strr1 = str1.toLowerCase();
  strr2 = str2.toLowerCase();

  const arr1 = [];
  const arr2 = [];
  for (let i = 0; i < strr1.length - 1; i++) {
    const temp = strr1.slice(i, i + 2);
    let flag = true;
    for (let j = 0; j < temp.length; j++) {
      if (temp[j].charCodeAt() < 97 || temp[j].charCodeAt() > 122) {
        flag = false;
        break;
      }
    }
    if (flag) {
      arr1.push(temp);
    }
  }
  for (let i = 0; i < strr2.length - 1; i++) {
    const temp = strr2.slice(i, i + 2);
    let flag = true;
    for (let j = 0; j < temp.length; j++) {
      if (temp[j].charCodeAt() < 97 || temp[j].charCodeAt() > 122) {
        flag = false;
        break;
      }
    }
    if (flag) {
      arr2.push(temp);
    }
  }
  // console.log(arr1)
  // console.log(arr2)
  function getIntersectionLength(arr1, arr2) {
    const result = [];
    let tempArr2 = [...arr2];
    return arr1
      .map((el) => {
        const idx = tempArr2.indexOf(el);
        if (idx > -1) {
          tempArr2 = tempArr2.slice(0, idx).concat(tempArr2.slice(idx + 1));
          return true;
        }
        return false;
      })
      .filter((x) => x === true).length;
  }
  let intersection = getIntersectionLength(arr1, arr2);
  let sum = arr1.length + arr2.length - intersection;
  let result = Math.floor((intersection / sum) * 65536);

  if (arr1.length === 0 && arr2.length === 0) {
    return 65536;
  } else {
    return result;
  }
}
