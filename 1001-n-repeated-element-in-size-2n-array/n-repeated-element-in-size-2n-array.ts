function repeatedNTimes(nums: number[]): number {
    const map = {}
    
    for (const num of nums) {
        if (map[num]) { map[num] += 1 }
        else { map[num] = 1 }

        if (map[num] === nums.length / 2) { return num }
    }
 
    return 0
};