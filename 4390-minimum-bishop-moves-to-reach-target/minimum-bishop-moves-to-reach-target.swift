class Solution {
    func minBishopMoves(_ source: [Int], _ target: [Int]) -> Int {
        // Check if it's in same color tiles by checking (x1 + y1) % 2 === (x2 + y2) % 2, if not return -1
        // Check if it's in one line: abs(x1 - x2) === (y1 - y2)
        // else: 2 moves

        let isSameColor = (source[0] + source[1]) % 2 == (target[0] + target[1]) % 2

        if isSameColor {
            let isOneLine = abs(source[0] - target[0]) == abs(source[1] - target[1])

            if isOneLine {
                return 1
            }
            return 2
        }
        return -1
    }
}