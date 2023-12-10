class Solution {
    func countPoints(_ rings: String) -> Int {
        // create map of rods
        // loop through rings with increment 2
        // assign to rods the ring
        // loop through map, the one that .count is 3 increase the result

        var result = 0

        var map: [Int:[Character:Bool]] = [:]
        for i in stride(from: 0, to: rings.count, by: 2) {
            let positionIndex = rings.index(rings.startIndex, offsetBy: i+1)
            let colorIndex = rings.index(rings.startIndex, offsetBy: i)

            let position = Int(String(rings[positionIndex]))!
            let color = rings[colorIndex]

            if (map[position] != nil) {
                if (map[position]![color] == nil) {
                    map[position]![color] = true
                }
            } else {
                map[position] = [:]
                map[position]![color] = true
            }
        }

        for (_, value) in map {
            if (value.count == 3) {
                result += 1
            }
        }

        return result
    }
}