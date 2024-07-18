class Solution:
    def numberOfAlternatingGroups(self, colors: List[int]) -> int:
        group = 0

        for i in range(0, len(colors)):
            prv = colors[-1] if i == 0 else colors[i-1]
            nxt = colors[0] if i == len(colors) - 1 else colors[i+1]
            crr = colors[i]

            if prv != crr and crr != nxt: group += 1

        return group