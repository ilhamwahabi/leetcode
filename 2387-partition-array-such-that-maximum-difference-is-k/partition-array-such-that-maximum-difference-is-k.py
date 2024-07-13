class Solution:
    def partitionArray(self, nums: List[int], k: int) -> int:
        # Sort nums
        # Count = 1, Store first value as min, iterate until we found curr - min > k
        # then store this curr as min, count += 1

        nums.sort()

        count = 1
        mn = nums[0]

        for i in range(1, len(nums)):
            if nums[i] - mn > k:
                count += 1
                mn = nums[i]
        
        return count