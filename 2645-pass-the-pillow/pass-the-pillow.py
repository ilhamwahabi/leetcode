class Solution:
    def passThePillow(self, n: int, time: int) -> int:
        # After time n-1, pos will be n
        # After time 2 * (n-1), pos will be 1
        if (time // (n-1)) % 2 == 0:
            return 1 + time % (n-1)
        else:
            return n - time % (n-1)