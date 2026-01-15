function countTriplets(arr: number[]): number {
    let count = 0

    for (let i = 0; i <= arr.length - 2; i++) {
        for (let j = i + 1; j <= arr.length - 1; j++) {
            let left = 0
            for (let x = i; x < j; x++) {
                left ^= arr[x]
            }

            let right = 0
            for (let x = j; x <= arr.length - 1; x++) {
                right ^= arr[x]
                if (right === left) count++
            }
        }
    }

    return count
};