class Solution {
    func countValidPrefixes(_ s: String) -> Int {
        var count = 0

        var zero = 0
        var one = 0
        for char in s {
            if char == "0" {
                zero += 1
            } else {
                one += 1
            }

            if abs(zero - one) <= 1 {
                count += 1
            }
        }

        return count
    }
}