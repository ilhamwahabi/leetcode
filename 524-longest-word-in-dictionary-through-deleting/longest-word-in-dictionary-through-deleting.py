class Solution:
    def findLongestWord(self, s: str, dictionary: List[str]) -> str:
        # Time: Quadratic, O(n*(n + n) + nlog(n)) ~ O(n^2)
        # Space: Linear, O(n + 1) ~ O(n)

        # Count all occurances of character in s
        # Iterate dictionary, check if all character <= from the s, then store it
        # Sort the result, return the first, if none: empty string

        res = []
        for dict in dictionary:
            i = 0
            j = 0

            while i < len(s) and j < len(dict):
                if s[i] == dict[j]:
                    j += 1
                i += 1

            if j == len(dict):
                res.append(dict)

        if len(res) == 0: return ""
        res.sort(key=lambda x: (-len(x), x))
        print(res)
        return res[0]