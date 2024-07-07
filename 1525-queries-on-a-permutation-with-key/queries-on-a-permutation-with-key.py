class Solution:
    def processQueries(self, queries: List[int], m: int) -> List[int]:
        # Time: O(n + n^m) ~ O(n^2), quadratic
        # Space: O(n + m) ~ O(n), linear

        # Generate array of 1,2,..,m
        # Iterate queries, find until we found the occurances, append the index
        # Delete the current element that we found, insert to beginning

        perm = []
        for i in range(1, m+1):
            perm.append(i)

        res = []
        for query in queries:
            for i in range(len(perm)):
                if perm[i] == query:
                    res.append(i)
                    perm.pop(i)
                    perm.insert(0, query)
                    break

        return res