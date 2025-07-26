function checkPrimeFrequency(nums: number[]): boolean {
    // Iterate nums, find frequency for each number, store in hashmap
    // For each hashmap key (number), check is it prime or not

    // Time: O(nlog(n)), we iterate each key and loop to sqrt
    // Space: O(n), we store the value in hashmap

    const map = {}

    nums.forEach(num => {
        map[num] ? map[num]++ : map[num] = 1
    })

    for (const key in map) {
        if (isPrime(map[key])) return true
    }

    return false
};

function isPrime(num: number) {
    if (num === 1) return false
    if (num === 2 || num === 3) return true
    if (num % 2 === 0 || num % 3 === 0) return false
    for (let i = 5; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false
    }

    return true
}