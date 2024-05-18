function checkArithmeticSubarrays(nums: number[], l: number[], r: number[]): boolean[] {
    // Iterate l and r, slice nums based on it
    // Sort the sliced nums
    // Check if diff between two item is same

    const result = []

    for (let i = 0; i < l.length; i++) {
        const sub = nums.slice(l[i], r[i] + 1)
        sub.sort((a,b) => a-b)

        let armt = true
        let j = 1
        while (j < sub.length - 1 && armt) {
            if (sub[j-1] - sub[j] !== sub[j] - sub[j+1]) armt = false
            j++
        }

        result.push(armt)
    }

    return result
};