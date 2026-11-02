class Solution {
    func peakValleyDifference(_ nums: [Int]) -> Int {
        // Iterate nums, find peak and valley, sum each

        var result = 0

        for i in stride(from: 1, to: nums.count - 1, by: 1) {
            let isPeak = nums[i - 1] < nums[i] && nums[i] > nums[i + 1]
            let isValley = nums[i - 1] > nums[i] && nums[i] < nums[i + 1]

            if isPeak { result += nums[i] }
            if isValley { result -= nums[i] }
        }

        return result
    }
}