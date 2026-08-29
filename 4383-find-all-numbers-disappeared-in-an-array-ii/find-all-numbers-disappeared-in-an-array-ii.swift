class Solution {
    func findDisappearedNumbers(_ nums: [Int], _ lower: Int, _ upper: Int) -> [[Int]] {
        // Store nums in hashmap
        // Iterate from lower to upper, inclusive
        // If prev i exist in hashmap or index == first but current is not then add in range array as start
        // If next i exist in hashmap or index == last but current is not then add in range array as end
        // if end already found, append on result array and empty the range array again

        // Time: O(n + m)
        // Space: O(n + m + 2)

        var map: [Int:Bool] = [:]
        for num in nums {
            map[num] = true
        }

        var resultArr: [[Int]] = []

        var rangeArr: [Int] = []
        for i in stride(from: lower, through: upper, by: 1) {
            if map[i] == nil && (i == lower || map[i - 1] != nil) {
                rangeArr.append(i)
            }
            if map[i] == nil && (i == upper || map[i + 1] != nil) {
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