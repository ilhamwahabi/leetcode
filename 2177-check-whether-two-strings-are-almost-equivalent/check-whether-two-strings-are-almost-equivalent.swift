class Solution {
    func checkAlmostEquivalent(_ word1: String, _ word2: String) -> Bool {
        // create map of frequencies for each string
        // iterate first map, if the difference >3 return false (nil considered 0)
        // iterate 2nd map

        var map1: [Character:Int] = [:]
        for char in Array(word1) {
            map1[char] == nil ? (map1[char] = 1) : (map1[char]! += 1)
        }

        var map2: [Character:Int] = [:]
        for char in Array(word2) {
            map2[char] == nil ? (map2[char] = 1) : (map2[char]! += 1)
        }

        for (key, value) in map1 {
            if (map2[key] == nil) {
                if value > 3 { return false }
            } else {
                if abs(value - map2[key]!) > 3 { return false }
            }
        }

        for (key, value) in map2 {
            if (map1[key] == nil) {
                if value > 3 { return false }
            } else {
                if abs(value - map1[key]!) > 3 { return false }
            }
        }

        return true
    }
}