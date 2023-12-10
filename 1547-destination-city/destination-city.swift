class Solution {
    func destCity(_ paths: [[String]]) -> String {
        // create map [String:String]
        // loop through paths
        // for the first element, assign it as a key with value the 2nd element
        // assign 2nd element as a key with value nil (if not exist yet in map)
        // return key that value nil

        var map: [String:[String]] = [:]

        for path in paths {
            let origin = path[0]
            let destination = path[1]

            if (map[origin] == nil) {
                map[origin] = [destination]
            } else {
                map[origin]!.append(destination)
            }

            if (map[destination] == nil) {
                map[destination] = []
            }
        }

        for (key,value) in map {
            if (value.count == 0) {
                return key
            }
        }

        return ""
    }
}