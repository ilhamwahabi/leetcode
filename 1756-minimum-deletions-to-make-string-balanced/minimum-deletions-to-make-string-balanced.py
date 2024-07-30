class Solution:
    def minimumDeletions(self, s: str) -> int:
        # Iterate from the back, count the 'a'
        # The if we found 'b', increase the deletion counter

        a = 0
        deletion = 0

        for i in reversed(range(len(s))):
            if s[i] == "a":
                a += 1
            else:
                if a > 0:
                    a -= 1
                    deletion += 1
        
        return deletion