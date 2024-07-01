class Solution:
    def findThePrefixCommonArray(self, A: List[int], B: List[int]) -> List[int]:
        res = []

        occ = {}
        for a, b in zip(A, B):
            count = 0
            if len(res) > 0: count += res[-1]
            
            if a in occ: count += 1
            else: occ[a] = True

            if b in occ: count += 1
            else: occ[b] = True

            res.append(count)

        return res