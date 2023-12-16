class Solution {
    func countAsterisks(_ s: String) -> Int {
        let parts = s.components(separatedBy: "|")

        var count = 0
        for i in stride(from: 0, to: parts.count, by: 2) {
            for char in parts[i] {
                if (char == "*") {
                    count += 1
                }
            }
        }

        return count
    }
}