function solution(n, words) {
    const whoWords = Array.from(Array(n), () => new Array().fill());
    let answer = [0, 0];
    const findDuplicate = [];
    for (let i = 0; i < words.length; i++) {
        whoWords[i % n].push(words[i]);
        if (findDuplicate.length) {
            const prev = findDuplicate[findDuplicate.length -1];
            const cur = words[i];
            if (prev[prev.length - 1] !== cur[0]) {
                answer[0] = i % n + 1;
                answer[1] = whoWords[i % n].length;
                return answer;
            }
            
        }
        
        if (!findDuplicate.includes(words[i])) findDuplicate.push(words[i]);
        else {
            answer[0] = i % n + 1;
            answer[1] = whoWords[i % n].length;
            return answer;
        }
    }
    
    return answer;
}