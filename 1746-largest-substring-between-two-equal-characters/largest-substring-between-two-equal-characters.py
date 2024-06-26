class Solution:
    def maxLengthBetweenEqualCharacters(self, s: str) -> int:
        idx = {}

        for i in range(len(s)):
            if idx.get(s[i]) is None:
                idx[s[i]] = i

        res = -1
        for i in reversed(range(len(s))):
            if idx.get(s[i]) is not None:
                res = max([res, i - idx.get(s[i]) - 1])

        return res
