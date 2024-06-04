function solution(e, starts) {
    const arr = new Array(e+1).fill(0);
    
    for (let i = 1; i <= e; i++) {
        for (let j = i; j <= e; j += i) {
            arr[j]++;
        }
    }
    
    // console.log(arr)
    
    const answer = [];
    
    const maxArr = new Array(e+1).fill(0);
    maxArr[e] = e;
    
    for (let i = e - 1; i >= 1; i--) {
        if (arr[i] >= arr[maxArr[i + 1]]) {
            maxArr[i] = i;
        } else {
            maxArr[i] = maxArr[i + 1];
        }
    }
    // console.log(maxArr)
    for (s of starts) {
        answer.push(maxArr[s]);
    }
    
    return answer;
}