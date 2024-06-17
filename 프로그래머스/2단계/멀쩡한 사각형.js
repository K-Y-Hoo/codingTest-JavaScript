function solution(w, h) {
    const gcdResult = gcd(w, h);
    
    return w * h - (w + h - gcdResult);
}


function gcd(a, b) {
    const mod = a % b;
    
    if (mod === 0) return b;
    
    return gcd(b, mod);
}