function diagonalPrime(nums: number[][]): number {
    // 1. Iterate nums, identify the diagonal
    // 2. Check if that num is prime

    let prime = 0

    for (let i = 0; i < nums.length; i++) {
        if (isPrime(nums[i][i]) && nums[i][i] > prime) prime = nums[i][i]
        if (
            isPrime(nums[i][nums.length - 1 - i]) && 
            nums[i][nums.length - 1 - i] > prime
        ) prime = nums[i][nums.length - 1 - i]
    }

    return prime
};

function isPrime(num: number): boolean {
    // 2 3   5 7 . 11 13 . 17 19 ... -> 6n - 1 or 6n + 1

    if (num <= 1) return false
    if (num === 2 || num === 3) return true
    if (num % 2 === 0 || num % 3 === 0) return false

    for (let i = 5; i <= Math.sqrt(num); i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false
    }

    return true
}