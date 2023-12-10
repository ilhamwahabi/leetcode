class Solution {
    func sumCounts(_ nums: [Int]) -> Int {
        // create variable count
        // nested loop, while the i < nums.length and for loop inside with increment of i
        // use map for each subarray loop to determine distinct value (use loop to map)
        // return count

        var count = 0

        var i = 1
        while (i <= nums.count) {
            for j in 0..<nums.count-i+1 {
                var map: [Int:Int] = [:]

                for k in j..<j+i {
                    if (map[nums[k]] == nil) {
                        map[nums[k]] = 1
                    } else {
                        map[nums[k]]! += 1
                    }
                }

                count += map.count * map.count
            }

            i += 1
        }

        return count
    }
}