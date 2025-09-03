function searchMatrix(matrix: number[][], target: number): boolean {
    let low = 0
    let high = matrix.length - 1

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2)

        if (target >= matrix[mid][0] && target <= matrix[mid][matrix[mid].length - 1]) {
            return binarySearch(matrix[mid], target)
        }
        if (target > matrix[mid][0]) low = mid + 1
        if (target < matrix[mid][0]) high = mid - 1
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