class Solution {
    func numSpecial(_ mat: [[Int]]) -> Int {
        // create map of bannedRow: [Int:Bool]
        // create map of bannedCol: [Int:Bool]
        // create array [Int] to save 1's position, with [row,col]
        // iterate mat to get those two
        // iterate arr and check which one that is not in in bannedRow and bannedCol

        var bannedRow: [Int:Int] = [:]
        var bannedCol: [Int:Int] = [:]

        var onePosition: [[Int]] = []

        for i in 0..<mat.count {
            for j in 0..<mat[i].count {
                if (mat[i][j] == 1) {
                    if (bannedRow[i] == nil) { bannedRow[i] = 1 }
                    else { bannedRow[i]! += 1 }

                    if (bannedCol[j] == nil) { bannedCol[j] = 1 }
                    else { bannedCol[j]! += 1 }

                    onePosition.append([i,j])
                }
            }
        }

        var alone = 0
        for one in onePosition {
            if (bannedRow[one[0]] == 1 && bannedCol[one[1]] == 1) {
                alone += 1
            }
        }

        return alone
    }
}