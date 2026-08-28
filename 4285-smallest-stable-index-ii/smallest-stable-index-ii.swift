class Solution {
    func firstStableIndex(_ nums: [Int], _ k: Int) -> Int {
        // Create array of maxScore, iterate nums from start to end
        // Create array of minScore, iterate nums from end to start, reverse the array
        // Iterate nums, count instability score and store the index if <= k

        // Time: O(n + n + n)
        // Space: O(n)

        var minScore = [Int](repeating: 0, count: nums.count)
        var mins = Int.max
        for i in stride(from: nums.count - 1, through: 0, by: -1) {
            mins = min(mins, nums[i])
            minScore[i] = mins
        }

        var maxs = Int.min
        for i in nums.indices {
            maxs = max(maxs, nums[i])
            if maxs - minScore[i] <= k { return i }
        }
        return -1
    }
}