class Solution {
    func twoSum(_ numbers: [Int], _ target: Int) -> [Int] {
        var p1 = 0
        var p2 = p1 + 1

        while (p1 < numbers.count - 1) {
            if (numbers[p1] + numbers[p2] == target) {
                break
            } else {
                if (p2 == numbers.count - 1) {
                    p1 += 1
                    p2 = p1 + 1
                } else {
                    p2 += 1
                }
            }
        }

        return [p1 + 1,p2 + 1]
    }
}