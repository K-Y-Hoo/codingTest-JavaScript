function solution(maps) {
    const dx = [-1, 0, 1, 0];
    const dy = [0, -1, 0, 1];
    const n = maps.length;
    const m = maps[0].length;
    const visited = Array.from(Array(n), () => new Array(m).fill(0));

    function bfs(startX, startY) {
        const queue = [];
        let sum = 0;
        queue.push([startX, startY, parseInt(maps[startX][startY])]);
        
        while (queue.length) {
            let [x, y, value] = queue.shift();
            if (visited[x][y]) continue;
            visited[x][y] = true;
            sum += value;

            for (let i = 0; i < 4; i++) {
                const ddx = x + dx[i];
                const ddy = y + dy[i];
                if (ddx < 0 || ddx >= n || ddy < 0 || ddy >= m) continue;
                if (visited[ddx][ddy]) continue;
                if (maps[ddx][ddy] == "X") continue;
                queue.push([ddx,ddy, parseInt(maps[ddx][ddy])]);
            }
        }
        return sum;
    }
    
    const answer = [];
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (maps[i][j] != "X") {
                result = bfs(i, j);
                if (result != 0) {
                    answer.push(result);
                }
            }
        }
    }
    
    return answer.length ? answer.sort((a, b) => a - b) : [-1]; 
}