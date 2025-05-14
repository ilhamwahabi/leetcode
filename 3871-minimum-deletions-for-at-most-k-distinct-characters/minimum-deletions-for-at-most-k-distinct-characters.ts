function minDeletion(s: string, k: number): number {
    // Iterate each char in s
    // store the occurance in { key: string, count: number }[]
    // Filter count: 0, sort ascending based on count
    // Iterate for each difference between total distinct and k

    // Time: O(nlogn), there is sorting happened
    // Space: O(1), the space size doesn't changed based on input

    let arr = Array.from({ length: 26 }, (_, i) => ({
        key: String.fromCharCode(i + 97),
        count: 0
    }))

    for (const char of s) {
        const code = char.charCodeAt(0) - 97
        arr[code].count++
    }

    arr = arr.filter(item => item.count > 0)
    arr.sort((a, b) => a.count - b.count)

    let del = 0
    let j = 0
    for (let i = arr.length; i > k; i--) {
        del += arr[j].count
        j++
    }
    return del
};