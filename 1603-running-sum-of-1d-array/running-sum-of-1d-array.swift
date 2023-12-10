class Solution {
    func runningSum(_ nums: [Int]) -> [Int] {
        // create new arr, first element is nums.first
        // loop through nums, start from 1
        // append to arr nums[i] + arr.last
        // return arr

        var arr: [Int] = [nums.first!]

        for i in 1..<nums.count {
            arr.append(nums[i] + arr.last!)
        }

        return arr
    }
}