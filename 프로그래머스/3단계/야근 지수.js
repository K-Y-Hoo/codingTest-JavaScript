function solution(n, works) {
    let remainHour = n;
    
    const worksSum = works.reduce((acc, cur) => {
        return acc + cur;
    }, 0);
    
    if (worksSum <= n) {
        return 0;
    }
    
    while (remainHour > 0) {
        const maxIndex = findMaxIndex(works);
        works[maxIndex] -= 1;
        remainHour -= 1;
    }
    let answer = 0;
    works.map((el) => {
        answer += el ** 2;
    });
    
    return answer;
    
    function findMaxIndex(arr) {
        let maxIndex = 0;
        let maxValue = arr[0];
        
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > maxValue) {
                maxValue = arr[i];
                maxIndex = i;
            }
        }
        
        return maxIndex;
    }
}