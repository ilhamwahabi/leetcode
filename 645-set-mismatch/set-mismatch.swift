class Solution {
    func findErrorNums(_ nums: [Int]) -> [Int] {
        var map: [Int:Int] = [:]

        for i in 1...nums.count {
            map[i] = 0
        }

        for i in 0..<nums.count {
            map[nums[i]]! += 1
        }

        var result = [0,0]
        for (key,value) in map {
            if (value == 0) { result[1] = key }
            else if (value == 2) { result[0] = key }

            if (result[0] != 0 && result[1] != 0) { return result }
        }

        return result
    }
}