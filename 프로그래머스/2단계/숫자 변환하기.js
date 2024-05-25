function solution(x, y, n) {
    const dp = new Array(y+1).fill(-1);
    dp[x] = 0;
    
    for (let i = x; i <= y; i++) {
        if (dp[i] === -1) continue;
        
        if (i + n <= y) {
            if (dp[i + n] === -1) {
                dp[i + n] = dp[i] + 1;
            } else {
                dp[i + n] = dp[i + n] > dp[i] + 1 ? dp[i] + 1 : dp[i + n];
            }
        }
        
        if (i * 2 <= y) {
            if (dp[i * 2] === -1) {
                dp[i * 2] = dp[i] + 1;
            } else {
                dp[i * 2] = dp[i * 2] > dp[i] + 1 ? dp[i] + 1 : dp[i * 2];
            }
        }
        
        if (i * 3 <= y) {
            if (dp[i * 3] === -1) {
                dp[i * 3] = dp[i] + 1;
            } else {
                dp[i * 3] = dp[i * 3] > dp[i] + 1 ? dp[i] + 1 : dp[i * 3];
            }
        }
    }
    
    return dp[y];
}


function solution(x, y, n) {
    const queue = [];
    queue.push([y, 0]);
    
    while (queue.length) {
        const [val, cnt] = queue.shift();
        
        if (val === x) return cnt;
        
        if (val % 3 === 0 && val / 3 >= x) queue.push([val / 3, cnt + 1]);
        
        if (val % 2 === 0 && val / 2 >= x) queue.push([val / 2, cnt + 1]);
        
        if (val - n >= x) queue.push([val - n, cnt + 1]);
    }
    
    return -1;
}