class Solution {
    func maxNumberOfBalloons(_ text: String) -> Int {
        var map: [Character:Int] = [:]

        for char in Array(text) {
            if (map[char] == nil) { map[char] = 1 }
            else { map[char]! += 1 }
        }

        var count = 0
        var isMax = false
        while (!isMax) {
            if (
                map["b"] ?? 0 >= 1 && map["a"] ?? 0 >= 1 && 
                map["l"] ?? 0 >= 2 && map["o"] ?? 0 >= 2 && map["n"] ?? 0 >= 1
            ) {
                count += 1
                map["b"]! -= 1 
                map["a"]! -= 1 
                map["l"]! -= 2 
                map["o"]! -= 2 
                map["n"]! -= 1        
            } else {
                isMax = true
            }
        }

        return count
    }
}