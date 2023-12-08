class Solution {
    func arithmeticTriplets(_ nums: [Int], _ diff: Int) -> Int {
        var results: [[Int]] = []
 
        for i in 0..<nums.count-2 {
            for j in (i + 1)..<nums.count-1 {
                for k in (j + 1)..<nums.count {
                    if (nums[j] - nums[i] == diff && nums[k] - nums[j] == diff) {
                        results.append([i,j,k])
                    }
                }
            }
        }

        return results.count
    }
}