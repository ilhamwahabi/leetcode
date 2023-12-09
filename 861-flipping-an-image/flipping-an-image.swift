class Solution {
    func flipAndInvertImage(_ image: [[Int]]) -> [[Int]] {
        var flippedAndInvert: [[Int]] = []

        for i in 0..<image.count {
            var result: [Int] = []
            
            for j in (0..<image[i].count).reversed() {
                result.append(image[i][j] == 0 ? 1 : 0)
            }

            print(result)
            flippedAndInvert.append(result)
        }

        return flippedAndInvert
    }
}