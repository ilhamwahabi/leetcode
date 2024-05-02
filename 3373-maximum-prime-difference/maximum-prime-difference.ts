function maximumPrimeDifference(nums: number[]): number {
    let firstIndex = -1
    let lastIndex = -1

    // 1. Loop from the front until get first prime or i === nums.length
    // 2. Loop from the back until get last prime or j === i or j === 1
    // 3. Return lastIndex = firstIndex

    let i = 0
    while (firstIndex === -1 && i < nums.length) {
        if (isPrime(nums[i])) firstIndex = i
        else i++
    }

    let j = nums.length - 1
    while (lastIndex === -1 && j >= 0) {
        if (j === firstIndex || isPrime(nums[j])) lastIndex = j
        else j--
    }

    return lastIndex - firstIndex
};

function isPrime(n: number) {
    if (n === 1) return false
    if (n === 2 || n === 3) return true
    if (n % 2 === 0 || n % 3 === 0) return false

    for (let i = 5; i <= Math.sqrt(n); i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false
    }

    return true
}