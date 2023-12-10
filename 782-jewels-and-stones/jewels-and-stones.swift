class Solution {
    func numJewelsInStones(_ jewels: String, _ stones: String) -> Int {
        // create output = 0
        // create map for jewel, iterate through jewels, add it to the key
        // iterate stones, if it's exist in map key then output +=1
        // return output

        var output = 0

        var map: [Character:Bool] = [:]

        for (key) in Array(jewels) {
            map[key] = true
        }

        for stone in Array(stones) {
            if (map[stone] == true) {
                output += 1
            }
        }

        return output
    }
}