class Solution:
    def largestPerimeter(self, nums: List[int]) -> int:
        # Time: O(nlog(n) + n) ~ O(nlog(n)), loglinear
        # Space: O(1), constant

        nums.sort()

        res = -1
        acc = 0
        for i in range(len(nums)):
            num = nums[i]

            if acc > num: res = acc + num
            acc += num

        return res