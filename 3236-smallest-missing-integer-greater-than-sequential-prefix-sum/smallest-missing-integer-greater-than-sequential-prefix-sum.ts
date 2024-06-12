function missingInteger(nums: number[]): number {
    // Find longest sequential, get the sum
    // Store the num in map, to check is the sum exist later
    // Increment sum until we don't found it in map

    let longest = 1
    let sum = nums[0]

    let currentLong = 1
    let currentSum = nums[0]
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i+1] - 1) {
            currentLong++
            currentSum += nums[i+1]

            if (currentLong > longest) {
                longest = currentLong
                sum = currentSum
            }
        } else {
            break
        }
    }

    const map = {}
    nums.forEach(num => { map[num] = true })

    while (map[sum]) { sum++ }
    return sum
};