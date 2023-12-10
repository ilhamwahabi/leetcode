class Solution {
    func shuffle(_ nums: [Int], _ n: Int) -> [Int] {
        // create empty array
        // loop from 0 to n, append the i then n+i
        // return

        var arr: [Int] = []

        for i in 0..<n {
            arr.append(contentsOf: [nums[i], nums[n+i]])
        }

        return arr
    }
}