class Solution {
    func longestBalanced(_ s: String) -> Int {
        // Time: O(n ^ n . 26)
        // Space: O(26)

        var longest = Int.min
        var chars = Array(s)

        for i in 0...chars.count - 1 {
            var map: [Character: Int] = [:]

            for j in i...chars.count - 1 {
                let charJ = chars[j]
                map[charJ, default: 0] += 1

                let lng = j + 1 - i
                if map.values.min() == map.values.max() {
                    longest = max(longest, lng)
                }
            }
        }

        return longest
    }
}