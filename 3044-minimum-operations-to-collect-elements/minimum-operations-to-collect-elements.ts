function minOperations(nums: number[], k: number): number {
    // Create map to store what number that we should looking for (1..k)
    // Iterate nums while nums.length === 0 and observe > 0, count step

    const map = {}
    let step = 0
    let observe = k
    while (nums.length > 0 && observe > 0) {
        const el = nums.pop()
        step++

        if (el <= k && map[el] === undefined) {
            observe--
            map[el] = true
        }
    }

    return step
};