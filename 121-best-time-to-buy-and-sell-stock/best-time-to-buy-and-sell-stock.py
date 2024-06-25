class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        prevMax = None
        val = 0

        for i in reversed(range(len(prices))):
            if prevMax is None or prices[i] > prevMax:
                prevMax = prices[i]
            else:
                if prevMax - prices[i] > val:
                    val = prevMax - prices[i]

        return val