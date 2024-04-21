function countLargestGroup(n: number): number {
    const map = {}

    let largest = 0
    let largestTotal = 0

    for (let i = 1; i <= n; i++) {
        const sum = String(i).split("").reduce((prev, curr) => {
            return prev + parseInt(curr)
        }, 0)

        map[sum] ? map[sum].push(i) : map[sum] = [i]

        if (map[sum].length > largest) {
            largest = map[sum].length
            largestTotal = 1
        } else if (map[sum].length === largest) {
            largestTotal++
        }
    }

    return largestTotal
};