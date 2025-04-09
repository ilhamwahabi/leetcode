function findEvenNumbers(digits: number[]): number[] {
    // Map the digits into map, count the occurance
    // Loop from 100-999 inclusive, only even
    // Check occurances for each iteration, check if it's enough in map ++

    // Space: O(n), linear
    // Time: O(n*m), quadratic

    const map = digits.reduce((acc, curr) => {
        acc[curr] ? acc[curr]++ : acc[curr] = 1
        return acc
    }, {})

    const result = []

    for (let i = 100; i < 999; i += 2) {
        const str = String(i)
        const occ = {}

        for (const char of str) {
            occ[char] ? occ[char]++ : occ[char] = 1
        }

        let isExist = true
        for (const key in occ) {
            if (!map[key] || occ[key] > map[key]) {
                isExist = false
                break
            }
        }

        if (isExist) result.push(i)
    }

    return result
};