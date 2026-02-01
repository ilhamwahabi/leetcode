function specialArray(nums: number[]): number {
    nums.sort((a,b) => a - b)
    
    const map = new Map()
    for (let i = nums.length - 1; i >= 0; i--) {
        const curr = nums[i]

        map.set(curr, (map.get(curr) ?? 0) + 1)
    }

    let j = 0
    for (let i = 0; i <= nums.at(-1); i++) {
        const entry = map.get(nums[j])

        if (i <= nums[j]) {
            if (i === nums.length - j) return i

            if (i === nums[j]) {
                if (entry) j += entry
                else j++      
            }
        } else {
            if (entry) j += entry
            else j++
        }
    }

    return -1
};