class Solution:
    def fillCups(self, amount: List[int]) -> int:
        sec = 0

        while len(amount) > 0:
            amount.sort(reverse=True)
            if amount[0] != 0:
                sec += 1
                amount[0] -= 1
                if amount[1] != 0:
                    amount[1] -= 1
            else:
                amount.pop()

        return sec