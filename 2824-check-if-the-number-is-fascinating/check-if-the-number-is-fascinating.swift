class Solution {
    func isFascinating(_ n: Int) -> Bool {
        var concat = String(n) + String(n * 2) + String(n * 3)
        
        var map: [Character:Bool] = [:]
        for el in Array(concat) {
            if (map[el] == nil) { if (el != "0") { map[el] = true } }
            else {
                return false
            }
        }

        return map.count == 9
    }
}