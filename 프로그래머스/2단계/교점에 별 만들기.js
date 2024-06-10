function solution(line) {
   
    const arr = getIntersection(line);
    const [maxX, maxY, minX, minY] = arr.reduce(([maxX, maxY, minX, minY], [x, y]) =>
        [Math.max(maxX, x), Math.max(maxY, y), Math.min(minX, x), Math.min(minY, y)], [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]);
    
    const board = Array.from(Array(maxY - minY + 1), () => new Array(maxX - minX + 1).fill("."));
    arr.map(([x,y]) => {
        board[maxY-y][x-minX] = "*";
    });
    
    return board.map((el) => el.join(""));
}

function getIntersection(arr) {
    const points = [];
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const [a,b,e] = arr[i];
            const [c,d,f] = arr[j];
            
            const slope = a * d - b * c;
            
            if (slope) {
                const X = (b * f - e * d) / slope;
                const Y = (e * c - a * f) / slope;
                if (Number.isInteger(X) && Number.isInteger(Y)) {
                    points.push([X,Y]);
                }
            }
        }
    }
    
    return points;
}