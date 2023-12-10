class Solution {
    func checkIfPangram(_ sentence: String) -> Bool {
        // create map of character:bool
        // loop through sentence, if its not exist yet as key add it
        // if length of map == 26, return true else false

        var map: [Character:Bool] = [:]

        for char in Array(sentence) {
            if (map[char] == nil) {
                map[char] = true
            }
        }

        return map.count == 26
    }
}