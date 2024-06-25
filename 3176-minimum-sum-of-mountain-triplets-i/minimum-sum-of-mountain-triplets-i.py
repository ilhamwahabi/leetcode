class Solution:
    def minimumSum(self, nums: List[int]) -> int:
        min = -1

        for i in range (0, len(nums) - 2):
            for j in range (i + 1, len(nums) - 1):
                for k in range (j + 1, len(nums)):
                    if nums[i] < nums[j] and nums[k] < nums[j] and (min is -1 or nums[i] + nums[j] + nums[k] < min):
                        min = nums[i] + nums[j] + nums[k]
    
        return min