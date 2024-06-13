function findMinimumOperations(s1: string, s2: string, s3: string): number {
    // Iterate from 0 to min length between those 3
    // Increment if we all of these char same, if char[0] different: return ""
    // Return the differ between each string length to increment index

    let i = 0
    while (i < Math.min(s1.length, s2.length, s3.length)) {
        if (s1[i] === s2[i] && s2[i] === s3[i]) i++
        else break
    }

    if (i === 0) return -1
    return s1.length - i + s2.length - i + s3.length - i
};