function maximumSubarraySum(nums: number[], k: number): number {
    const map = {}
    let diff = 0

    let max = 0
    let sum = 0

    for (let i = 0; i < k; i++) {
        const num = nums[i]
        sum += num

        if (map[num]) {
            map[num]++
        } else {
            map[num] = 1
            diff++
        }
    }
    if (diff === k) max = Math.max(max, sum)

    for (let i = 1; i < nums.length - k + 1; i++) {
        const prev = nums[i - 1]
        const curr = nums[i + k - 1]
        sum = sum - prev + curr

        map[prev]--
        if (map[prev] === 0) {
            delete map[prev]
            diff--
        }
        
        if (map[curr]) {
            map[curr]++
        } else {
            map[curr] = 1
            diff++
        }

        if (diff === k) max = Math.max(max, sum)
    }

    return max
};