class Solution {
    func onesMinusZeros(_ grid: [[Int]]) -> [[Int]] {
        var oneInRows: [Int:Int] = [:]
        var oneInCols: [Int:Int] = [:]

        for i in 0..<grid.count {
            var oneInRow = 0
            for j in 0..<grid[i].count {
                if (grid[i][j] == 1) {
                    oneInRow += 1

                    if (oneInCols[j] == nil) { oneInCols[j] = 1 }
                    else { oneInCols[j]! += 1 }
                } else {
                    if (oneInCols[j] == nil) { oneInCols[j] = 0 }
                }
            }
            oneInRows[i] = oneInRow
        }

        var diff: [[Int]] = []
        for i in 0..<grid.count {
            var rows: [Int] = []
            for j in 0..<grid[i].count {
                rows.append(
                    oneInRows[i]! + oneInCols[j]!
                    - (grid[i].count - oneInRows[i]!)
                    - (grid.count - oneInCols[j]!)
                )
            }
            diff.append(rows)
        }

        return diff
    }
}