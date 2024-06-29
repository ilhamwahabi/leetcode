class Solution:
    def numberOfCuts(self, n: int) -> int:
        '''
        part cut
        1 0
        2 1
        3 3
        4 2
        5 5
        6 3
        '''
        if n == 1: return 0
        if n % 2 == 1: return n
        return n // 2