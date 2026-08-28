class Solution {
    func minPrice(_ prices: [Int], _ discounts: [Int]) -> Double {
        // Sort prices descending, sort discounts descending
        // Iterate prices, the price is (prices[i] * (100 - discounts[i])) / 100
        // Return accumulated final prices

        // Time: O(nlog(n) + mlog(m) + n)
        // Space: O(n + m) 

        var sortedPrices = prices.sorted(by: >)
        var sortedDiscounts = discounts.sorted(by: >)

        var total = 0.0
        for i in stride(from: 0, to: sortedPrices.count, by: 1) {
            if i >= discounts.count {
                total += Double(sortedPrices[i])
            } else {
                total += Double(sortedPrices[i] * (100 - sortedDiscounts[i])) / 100
            }
        }

        return total
    }
}