class Solution:
    def canAliceWin(self, nums: List[int]) -> bool:
        # Iterate nums, sum the value of single digit and double digit
        # Return if both value is not same

        # Time: O(n), linear
        # Space: O(1), constant

        s = 0
        d = 0

        for num in nums:
            if num < 10:
                s += num
            else:
                d += num
        
        return s != d