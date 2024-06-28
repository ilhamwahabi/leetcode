class Solution:
    def minimumAverage(self, nums: List[int]) -> float:
        nums.sort()

        res = None
        
        for i in range(len(nums)):
            avg = (nums[i] + nums[len(nums) - 1 - i]) / 2
            if res is None or avg < res: res = avg

        return res