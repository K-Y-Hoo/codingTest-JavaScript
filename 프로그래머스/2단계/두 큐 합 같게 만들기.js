function solution(queue1, queue2) {
    let cnt = 0;
    let queue1Sum = queue1.reduce((acc, cur) => acc + cur, 0);
    let queue2Sum = queue2.reduce((acc, cur) => acc + cur, 0);
    const totalLen = queue1.length + queue2.length;
    let queue1Index = 0;
    let queue2Index = 0;
    
    while (queue1Sum !== queue2Sum) {
        if (queue1Sum > queue2Sum) {
            queue1Sum -= queue1[queue1Index];
            queue2.push(queue1[queue1Index]);
            queue2Sum += queue1[queue1Index];
            queue1Index++;
        } else {
            queue2Sum -= queue2[queue2Index];
            queue1.push(queue2[queue2Index]);
            queue1Sum += queue2[queue2Index];
            queue2Index++;
        }
        
        cnt++;
        
        if (queue1Index >= totalLen || queue2Index >= totalLen) return -1;
    }
    
    return cnt;
}