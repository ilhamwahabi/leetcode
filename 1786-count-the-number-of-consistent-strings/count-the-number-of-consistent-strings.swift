class Solution {
    func countConsistentStrings(_ allowed: String, _ words: [String]) -> Int {
        // make map of allowed
        // loop through word
        // in start create variable in consistent=true
        // if a letter not exist in map, break and consistent=false

        var map: [Character:Bool] = [:]

        for char in Array(allowed) {
            if (map[char] == nil) {
                map[char] = true
            }
        }

        var result = 0
        for word in words {
            var consistent = true

            for char in Array(word) {
                if (map[char] == nil) {
                    consistent = false
                    break
                }
            }

            if (consistent) {
                result += 1
            }
        }

        return result
    }
}