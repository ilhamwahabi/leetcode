function maximumXor(s: string, t: string): string {
    // 101 011
    // 011
    
    // 0110 1110
    // 1011

    // Iterate t, count 0 and 1 in t
    // Iterate s from left, if its 0: +1 to result, if its 1: +0 to result
    // else: remaining 

    let count = [0,0]
    for (const char of t) {
        count[+char]++ 
    }

    let result = ""
    for (const char of s) {
        const opp = (+char + 1) % 2

        if (count[opp]) {
            result += +char ^ opp
            count[opp]--
        } else {
            result += +char ^ +char
        }
    }
    return result
};