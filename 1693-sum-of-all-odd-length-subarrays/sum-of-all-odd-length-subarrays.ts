function sumOddLengthSubarrays(arr: number[]): number {
    let sum = 0

    for (let i = 0; i < arr.length; i += 2) {
        for (let j = i; j < arr.length; j++) {
            sum += arr.slice(j - i, j + 1).reduce((prev, curr) => prev + curr, 0)
        }
    }

    return sum
};