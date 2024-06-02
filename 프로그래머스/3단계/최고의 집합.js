function solution(n, s) {
    if (n > s) return [-1];
    
    const quotient = s / n >> 0;
    const rest = s % n;
    
    const answer = new Array(n).fill(quotient);
    
    for (let i = 0; i < rest; i++) {
        answer[answer.length - 1 - i] += 1;
    }
    
    return answer;
}