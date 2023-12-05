class Solution {
    func searchInsert(_ nums: [Int], _ target: Int) -> Int {
        var low = 0
        var high = nums.count - 1
        var middle = low + (high - low) / 2

        while (low <= high) {
            if (nums[middle] == target) {
                return middle
            } else {
                if (nums[middle] < target) {
                    low = middle + 1
                    middle = low + (high - low) / 2
                } else {
                    high = middle - 1
                    middle = low + (high - low) / 2
                }
            }
        }

        return middle
    }
}