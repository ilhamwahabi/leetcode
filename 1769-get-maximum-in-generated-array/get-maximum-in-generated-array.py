class Solution:
    def getMaximumGenerated(self, n: int) -> int:
        arr = []

        for x in range(0, n + 1):
            res = None
            if x is 0 or x is 1:
                res = x
            elif x % 2 is 0:
                res = arr[x // 2]
            else:
                res = arr[(x - 1) // 2] + arr[((x - 1) // 2) + 1]

            arr.append(res)

        return max(arr)