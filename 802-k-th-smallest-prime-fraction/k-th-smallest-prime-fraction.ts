function kthSmallestPrimeFraction(arr: number[], k: number): number[] {
    // Create tuple of number [[1,2], [1,3]]
    // Sort ascending
    // Return tuples[k - 1]

    const tuples = []

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            tuples.push([arr[i], arr[j]])
        }
    }

    tuples.sort((a,b) => a[0] / a[1] - b[0] / b[1])

    return tuples[k - 1]
};