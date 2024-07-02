class Solution:
    def majorityElement(self, nums: List[int]) -> List[int]:
        occ = {}

        for num in nums:
            if num in occ:
                occ[num] += 1
            else:
                occ[num] = 1
        
        res = []
        for key in occ:
            if occ[key] > len(nums) / 3:
                res.append(key)
        return res