class Solution {
    func firstStableIndex(_ nums: [Int], _ k: Int) -> Int {
        // Create array of maxScore, iterate nums from start to end
        // Create array of minScore, iterate nums from end to start, reverse the array
        // Iterate nums, count instability score and store the index if <= k

        // Time: O(n + n + n + n + n)
        // Space: O(n + n)

        var maxScore: [Int] = []
        var maxs = nums.first ?? -1
        for num in nums {
            maxs = max(maxs, num)
            maxScore.append(maxs)
        }

        var minScore: [Int] = []
        var mins = nums.last ?? -1
        for num in nums.reversed() {
            mins = min(mins, num)
            minScore.append(mins)
        }
        minScore.reverse()

        for i in nums.indices {
            let instability = maxScore[i] - minScore[i]
            if instability <= k {
                return i
            }
        }
        return -1
    }
}