class Solution {
    func maxProductPair(_ nums: [Int], _ target: Int) -> [Int] {
        var result: [Int] = []

        for i in stride(from: 0, to: nums.count - 1, by: 1) {
            for j in stride(from: i + 1, to: nums.count, by: 1) {
                var sump = nums[i] + nums[j]
                var prod = nums[i] * nums[j]

                if sump == target && (result.count == 0 || prod > nums[result.first!] * nums[result.last!]) {
                    if nums[i] > nums[j] {
                        result = [i, j]
                    } else if nums[j] > nums[i] {
                        result = [j, i]
                    }
                }
            }
        }

        return result.count == 0 ? [-1,-1] : result
    }
}