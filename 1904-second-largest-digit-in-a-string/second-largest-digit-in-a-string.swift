class Solution {
    func secondHighest(_ s: String) -> Int {
        var lrg = -1
        var secondLrg = -2

        for el in Array(s) {
            if let el = el.wholeNumberValue {
                if (el > lrg && el > secondLrg) {
                    secondLrg = lrg
                    lrg = el
                } else if (el < lrg && el > secondLrg) {
                    secondLrg = el
                }
            }
        }

        return secondLrg == -2 ? -1 : secondLrg
    }
}