class Solution:
    def getDigit(self, num: int) -> int:
        res = 0

        for char in str(num):
            res += int(char)

        return res

    def maximumSum(self, nums: List[int]) -> int:
        nums.sort(reverse=True)

        res = -1
        occ = {}
        for num in nums:
            digit = self.getDigit(num)
            if digit in occ:
                res = max([res, num + occ[digit]])
            else:
                occ[digit] = num

        return res