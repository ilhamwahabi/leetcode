function centeredSubarrays(nums: number[]): number {
    let count = 0

    for (let i = 0; i < nums.length; i++) {
        const head = nums[i]

        const set = new Set([head])
        let sum = head
        count++
        
        for (let j = i + 1; j < nums.length; j++) {
            const tail = nums[j]

            set.add(tail)
            sum += tail

            if (set.has(sum)) count++
        }
    }

    return count
};