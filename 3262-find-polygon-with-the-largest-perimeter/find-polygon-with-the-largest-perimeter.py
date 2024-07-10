class Solution:
    def largestPerimeter(self, nums: List[int]) -> int:
        # Time: O(nlog(n) + n) ~ O(nlog(n)), loglinear
        # Space: O(1), constant

        nums.sort()

        res = -1
        acc = 0
        for num in nums:
            if acc > num: res = acc + num
            acc += num

        return res