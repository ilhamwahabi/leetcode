function minOperations(nums: number[], k: number): number {
    // Create map to store what number that we should looking for (1..k)
    // Iterate nums while nums.length === 0 and observe > 0, count step

    const map = {}
    for (let i = 1; i <= k; i++) map[i] = true

    let step = 0
    let observe = k
    while (nums.length > 0 && observe > 0) {
        const el = nums.pop()
        step++

        if (map[el]) {
            observe--
            delete map[el]
        }
    }

    return step
};