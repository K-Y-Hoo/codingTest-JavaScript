function solution(s) {
    const length = s.length;
    let answer = length;

    for (let i = 1; i <= length; i++) {
        let cnt = 1;
        let temp = s.slice(0, i);
        let shortenStr = "";
        
        for (let j = i; j < length; j += i) {
            if (temp === s.slice(j, j + i)) cnt++;
            else {
                if (cnt == 1) {
                    shortenStr += temp;
                } else {
                    shortenStr += String(cnt) + temp;
                }
                
                cnt = 1;
                temp = s.slice(j, j + i);
            }
        }
        
        if (cnt == 1) shortenStr += temp;
        else shortenStr += String(cnt) + temp;
        
        answer = Math.min(answer, shortenStr.length);
    }
    return answer;
}