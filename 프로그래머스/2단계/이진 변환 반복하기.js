function solution(s) {
    const answer = [];
    let binaryCnt = 0;
    let deletedZeroCnt = 0;
    let str = s;
    
    while (str != "1") {
        const result = deleteZero(str);
        str = result.newStr;
        deletedZeroCnt += result.deletedCount;
        // console.log(`stage1: ${str}`)
        str = changeToBinary(str);
        // console.log(`stage2: ${str}`)
        binaryCnt++;
    }
    
    // console.log([binaryCnt, deletedZeroCnt]);
    return [binaryCnt, deletedZeroCnt];
}

function deleteZero(s) {
    let tempStr = "";
    let deletedZeroCnt = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "1") tempStr += "1";
        else deletedZeroCnt++; 
    }
    
    return {newStr: tempStr, deletedCount: deletedZeroCnt};
}

function changeToBinary(s) {
    let len = s.length;
    
    return len.toString(2);
}