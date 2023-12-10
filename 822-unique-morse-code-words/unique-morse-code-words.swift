class Solution {
    func uniqueMorseRepresentations(_ words: [String]) -> Int {
        // create map with key is the morse code transformation result
        // loop through words
        // parse to morse code
        // if not exist in map, assign
        // return map length

        let morse: [Character:String] = [
            "a": ".-",
            "b": "-...",
            "c": "-.-.",
            "d": "-..",
            "e": ".",
            "f": "..-.",
            "g": "--.",
            "h": "....",
            "i": "..",
            "j": ".---",
            "k": "-.-",
            "l": ".-..",
            "m": "--",
            "n": "-.",
            "o": "---",
            "p": ".--.",
            "q": "--.-",
            "r": ".-.",
            "s": "...",
            "t": "-",
            "u": "..-",
            "v": "...-",
            "w": ".--",
            "x": "-..-",
            "y": "-.--",
            "z": "--.."
        ]

        var map: [String:Bool] = [:]

        for word in words {
            var m = ""

            for char in Array(word) {
                m += morse[char]!
            }

            if (map[m] == nil) {
                map[m] = true
            }
        }

        return map.count
    }
}