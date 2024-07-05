class Solution:
    def maxConsecutive(self, bottom: int, top: int, special: List[int]) -> int:
        # Sort special
        # 2-9=8, 4 -> 2-3=1 5-9=5, 6 -> 5-5=1 7-9=3
        # Find max between special[0] - bottom, special[1]-special[last-1], top-special[last]
        
        special.sort()
        res = max(special[0] - bottom, top - special[-1])
        
        for i in range(1, len(special)):
            res = max(res, special[i] - special[i-1] - 1)

        return res