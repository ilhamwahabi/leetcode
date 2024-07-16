class Solution:
    def getSmallestString(self, s: str) -> str:
        # Iterate s, if s[i] same parity with s[i-1] then swap it, check the min

        mn = s

        for i in range(1, len(s)):
            if (int(s[i]) + int(s[i-1])) % 2 == 0:
                mn = min(mn, s[:i-1] + s[i] + s[i-1] + s[i+1:])
        
        return mn