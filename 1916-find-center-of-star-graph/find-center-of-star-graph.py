class Solution:
    def findCenter(self, edges: List[List[int]]) -> int:
        occ = {}
        
        for edge in edges:
            a, b = edge
            
            if a in occ: occ[a] += 1
            else: occ[a] = 1

            if b in occ: occ[b] += 1
            else: occ[b] = 1

            if occ.get(a) == len(edges): return a
            if occ.get(b) == len(edges): return b

        return -1