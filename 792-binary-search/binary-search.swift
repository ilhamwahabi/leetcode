class Solution {
    func search(_ nums: [Int], _ target: Int) -> Int {
        var low = 0
        var high = nums.count - 1
        var middle = low + (high - low) / 2

        while (low <= high) {
            var middle = low + (high - low) / 2
            
            if (target == nums[middle]) {
                return middle
            } else {
                if (target < nums[middle]) {
                    high = middle - 1
                } else {
                    low = middle + 1
                }
            }
        }

        return -1
    }
}