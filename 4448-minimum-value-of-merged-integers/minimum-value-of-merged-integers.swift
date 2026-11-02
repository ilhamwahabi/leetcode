class Solution {
    func minMergedInteger(_ nums: [Int]) -> Int {
        // Time: O(n)
        // Space: O(1)

        var result = Int.max

        for index in stride(from: 0, to: nums.count, by: 2) {
            let num = concatNumber(nums[index], nums[index + 1])
            result = min(result, num)
        }

        return result
    }

    func concatNumber(_ num1: Int, _ num2: Int) -> Int {
        return Int("\(num1)\(num2)")!
    }
}