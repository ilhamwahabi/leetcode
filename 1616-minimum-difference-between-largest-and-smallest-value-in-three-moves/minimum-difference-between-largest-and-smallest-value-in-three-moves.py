class Solution:
    def minDifference(self, nums: List[int]) -> int:
        if len(nums) <= 3: return 0
        
        nums.sort()
        return min([
            nums[len(nums) - 1 - 3] - nums[0], # first and last 3
            nums[len(nums) - 1] - nums[3], # first 3 and last
            nums[len(nums) - 1 - 2] - nums[1], # first 1 and last 2
            nums[len(nums) - 1 - 1] - nums[2], # first 2 and last 1
        ])