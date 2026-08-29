class Solution {
    func findDisappearedNumbers(_ nums: [Int], _ lower: Int, _ upper: Int) -> [[Int]] {
        // Store nums in hashmap
        // Iterate from lower to upper, inclusive
        // If prev i exist in hashmap or index == first but current is not then add in range array as start
        // If next i exist in hashmap or index == last but current is not then add in range array as end
        // if end already found, append on result array and empty the range array again

        // Time: O(n + m)
        // Space: O(n + m + 2)

        var map: Set<Int> = Set(nums)
        var resultArr: [[Int]] = []

        var rangeArr: [Int] = []
        for i in stride(from: lower, through: upper, by: 1) {
            if !map.contains(i) && (i == lower || map.contains(i - 1)) {
                rangeArr.append(i)
            }
            if !map.contains(i) && (i == upper || map.contains(i + 1)) {
                rangeArr.append(i)
            }
            if rangeArr.count == 2 {
                resultArr.append(rangeArr)
                rangeArr = []
            }
        }

        return resultArr
    }
}