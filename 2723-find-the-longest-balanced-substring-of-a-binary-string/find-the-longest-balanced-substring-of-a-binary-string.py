class Solution:
    # Time: linear, O(n)
    # Space: constant, O(1)
    def findTheLongestBalancedSubstring(self, s: str) -> int:
        # If we found 0, count it
        # Then if we found 1, count it
        # If we found 0 again or end of str, save max with min value between 0's and 1's
        res = 0
        zero = 0
        one = 0
        for i in range(len(s)):
            prev = s[i-1]
            curr = s[i]

            if curr == "0":
                if prev == "1":
                    zero = 1
                    one = 0
                else:
                    zero += 1
            else:
                one += 1
                res = max(res, min(zero, one) * 2)
        
        return res