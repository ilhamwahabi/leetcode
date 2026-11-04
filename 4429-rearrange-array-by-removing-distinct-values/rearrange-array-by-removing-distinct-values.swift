class Solution {
    func rearrangeArray(_ nums: [Int]) -> [Int] {
        var map: [Int:Int] = [:]

        for num in nums {
            map[num] = map[num, default: 0] + 1
        }

        var ans: [Int] = []
        while map.count > 0 {
            let sortedKeys = map.keys.sorted()
            for key in sortedKeys {
                ans.append(key)
                map[key] = map[key, default: 1] - 1
                if map[key] == 0 {
                    map[key] = nil
                }
            }   
        }

        return ans
    }
}