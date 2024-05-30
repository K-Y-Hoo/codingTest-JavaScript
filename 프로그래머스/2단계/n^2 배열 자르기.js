function solution(n, left, right) {
    const answer = [];
    
    for (let i = left; i < right + 1; i++) {
        const a = parseInt(i / n);
        const b = i % n;
        
        answer.push(Math.max(a, b) + 1);
    }
    
    return answer;
}