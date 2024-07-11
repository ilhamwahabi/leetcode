class Solution:
    def minimizeSum(self, nums: List[int]) -> int:
        # Time: O(nlog(n)), loglinear
        # Space: O(1), constant

        nums.sort()

        return min(
            nums[-1] - nums[2],
            nums[-2] - nums[1],
            nums[-3] - nums[0],
        )