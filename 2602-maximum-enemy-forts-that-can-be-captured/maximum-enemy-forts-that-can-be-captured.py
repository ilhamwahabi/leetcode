class Solution:
    def captureForts(self, forts: List[int]) -> int:
        # Store group of 0
        # Iterate groups, check if both edge have -1 and 1 neighbour
        # Return max
        l = None
        val = 0

        for index in range(1, len(forts) - 1):
            fort = forts[index]
            if fort is 0:
                if forts[index - 1] is not 0:
                    l = index
                if forts[index + 1] is not 0 and l is not None and forts[l - 1] + forts[index + 1] is 0:
                    val = max([index - l + 1, val])

        return val