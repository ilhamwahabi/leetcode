class Solution:
    def maxOperations(self, nums: List[int], k: int) -> int:
        # Iterate nums, check if its exist k-num in dict: count++, else: save in dict
        # Time: O(n), linear
        # Space: O(n), linear

        occ = {}
        count = 0

        for num in nums:
            if k - num in occ and occ[k - num] > 0:
                occ[k - num] -= 1
                count += 1
            else:
                if num in occ: occ[num] += 1
                else: occ[num] = 1
        
        return count