function searchMatrix(matrix: number[][], target: number): boolean {
    for (let i = 0; i < matrix.length; i++) {
        const first = matrix[i][0]
        const last = matrix[i][matrix[i].length - 1]

        if (target < first) return false
        if (first <= target && target <= last) {
            return binarySearch(matrix[i], target)
        }
    }

    return false
};

function binarySearch(arr: number[], target: number): boolean {
    let low = 0
    let high = arr.length - 1

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2)

        if (arr[mid] === target) return true
        if (arr[mid] < target) low = mid + 1
        if (arr[mid] > target) high = mid - 1
    }

    return false
}