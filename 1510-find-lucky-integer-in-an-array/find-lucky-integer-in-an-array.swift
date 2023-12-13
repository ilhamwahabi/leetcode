class Solution {
    func findLucky(_ arr: [Int]) -> Int {
        // map through arr, count the frequency
        // iterate map, find if key == value

        var map: [Int:Int] = [:]

        for el in arr {
            if (map[el] == nil) {
                map[el] = 1
            } else {
                map[el]! += 1
            }
        }

        var lucky = -1
        for (key,value) in map {
            if (key == value && value > lucky) {
                lucky = value
            }
        }

        return lucky
    }
}