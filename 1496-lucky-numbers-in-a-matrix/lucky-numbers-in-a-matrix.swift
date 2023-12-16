class Solution {
    func luckyNumbers (_ matrix: [[Int]]) -> [Int] {
        var nums: [Int] = []

        var minRow: [Int:Int] = [:]
        var maxCol: [Int:Int] = [:]
        for i in 0..<matrix.count {
            for j in 0..<matrix[i].count {
                minRow[i] = min(minRow[i] ?? Int.max, matrix[i][j])
                maxCol[j] = max(maxCol[j] ?? Int.min, matrix[i][j])
            }
        }

        for i in 0..<matrix.count {
            for j in 0..<matrix[i].count {
                if (minRow[i] == maxCol[j]) {
                    nums.append(minRow[i]!)
                }
            }
        }

        return nums
    }
}