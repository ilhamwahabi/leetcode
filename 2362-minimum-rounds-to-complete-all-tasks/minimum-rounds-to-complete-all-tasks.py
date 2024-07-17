from math import ceil 

class Solution:
    def minimumRounds(self, tasks: List[int]) -> int:
        # Iterate tasks, store each number occurances
        # Iterate each occurances, if 1: return -1
        # else: +ceil(occ / 3)

        # Time: O(n + n) ~ O(n), linear
        # Space: O(n), linear

        occ = {}
        for task in tasks:
            if task in occ:
                occ[task] += 1
            else:
                occ[task] = 1

        round = 0
        for task in occ:
            if occ[task] == 1:
                return -1
            else:
                round += ceil(occ[task] / 3)
        
        return round