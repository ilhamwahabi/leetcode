class Solution:
    def removeCoveredIntervals(self, intervals: List[List[int]]) -> int:
        # Time: O(nlog(n) + n) ~ O(nlog(n)), loglinear
        # Space: O(1), constant

        intervals.sort(key=lambda x: (x[0], -x[1]))

        a, b = intervals[0]
        removed = 0

        for i in range(1, len(intervals)):
            x, y = intervals[i]

            if x >= a and y <= b: removed += 1
            else:
                if x < a: a = x
                if y > b: b = y
        
        return len(intervals) - removed