class Solution:
    def numberOfPoints(self, nums: List[List[int]]) -> int:
        def byFirst(num):
            return num[0]

        nums.sort(key=byFirst)

        point = 0
        x = None
        y = None
        for i in range(0, len(nums)):
            a, b = nums[i]

            if (x is None or (a < x and (b >= x and b <= y))):
                x = a
            if (y is None or (b > y and (a >= x and a <= y))):
                y = b
            if (i == len(nums) - 1 or a > y):
                point += y - x + 1
                if (a > y):
                    x = a
                    y = b
                    if i == len(nums) - 1: point += y - x + 1

        return point