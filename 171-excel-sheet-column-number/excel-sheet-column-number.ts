function titleToNumber(columnTitle: string): number {
    // A=1
    // B=2
    // Z=26
    // AA=27=26+1=A_+A
    // AB=28=26+2=A_+2=(26*1)+2
    // BA=B_+A=(26*2)+1=53
    // AAA=(26*(26*1))+(26*1)+1=676+26+1=703
    // BBB=(26*(26*2))+(26*2)+2=1352+52+4=1406

    // 1. Create sum to contain the result
    // 2. Iterate from back to the front, track current index
    // 3. Add sum with formula, lest say char index A is 1
    //    if its last char just add the char index
    //    else ((26 * index_from_last - 1) * (26 * charIndex))

    let result = 0

    for (let i = columnTitle.length - 1; i >= 0; i--) {
        const charIdx = columnTitle[i].charCodeAt(0) - 64
        
        if (i === columnTitle.length - 1) {
            result += charIdx
        } else {
            const idx = columnTitle.length - 1 - i - 1
            result += Math.pow(26, idx) * (26 * charIdx)
        }
    }

    return result
};