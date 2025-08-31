function gcdOfOddEvenSums(n: number): number {
    // 16 = 1 2 4 8 16
    // 20 = 1 2 4 5 10 20

    // Sum the first n odd number, start from 1
    // Sum the first n even number, start from 1
    // Find the factorial for each of them, start from 1 to x/2, save in set
    // Iterate from odd x from the largest, return

    // Time: O(n), iterate number and fact
    // Space: O(n), storing facts

    let odd = n * (n + 0)
    let even = n * (n + 1)

    for (let i = Math.floor(odd / 2); i > 0; i--) {
        if (odd % i === 0 && even % i === 0) return i
    }

    return odd
};