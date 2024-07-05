class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        if len(nums) == 0: return [[]]
        
        perms = self.permute(nums[1:])
        res = []

        for perm in perms:
            for i in range(len(perm) + 1):
                cp = perm.copy()
                cp.insert(i, nums[0])
                res.append(cp)

        return res

        # perms = [[]]
        
        # for num in nums:
        #     new_perms = []
        #     for perm in perms:
        #         for i in range(len(perm) + 1):
        #             copy = perm.copy()
        #             copy.insert(i, num)
        #             new_perms.append(copy)
        #     perms = new_perms

        # return perms