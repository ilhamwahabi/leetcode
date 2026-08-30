class Solution {
    func countSpecialIntegers(_ nums: [Int]) -> Int {
        // 1: 0 3
        // 2: 1 2

        // 1: 2 5
        // 2: 3 4
        // 3: 0 1

        // Create map to track number occurance index
        // Iterate nums, if the number not exist yet we add to map, increase count
        // If exist, check is if value == -1, if yes skip
        // if != -1, check is value == currentIndex - 1, if yes then continue
        // if no then replace value with -1, decrease count

        // Time: O(n)
        // Space: O(9)

        var map: [Int:Int] = [:]
        var count = 0
        for i in stride(from: 0, to: nums.count, by: 1) {
            let num = nums[i]
            if map[num] == nil {
                map[num] = i
                count += 1
            } else {
                if map[num] != -1 {
                    if map[num] == i - 1 {
                        map[num] = i
                    } else {
                        map[num] = -1
                        count -= 1
                    }
                }
            }
        }
        return count
    }
}