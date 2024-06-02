function solution(s) {
    for (let i = s.length; i >= 1; i--) {
        for (let j = 0; j <= s.length - i; j++) {
            if (isPalindrome(s.slice(j, j + i))) return i;
        }
    }
    
    return 1;
}

function isPalindrome(str) {
    const half = Math.floor(str.length / 2);

    for (let i = 0; i < half; i++) {
        if (str[i] !== str[str.length - 1 - i]) return false;
    }

    return true;
}