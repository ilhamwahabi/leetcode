class Solution:
    def maxCount(self, banned: List[int], n: int, maxSum: int) -> int:
        # Store banned in dict
        # Iterate from 1 to n, if its not exist in dict: acc it and count it
        # Time: O(m + n) ~ O(n), linear
        # Space: O(n), linear

        occ = {}
        for num in banned:
            occ[num] = True

        acc = 0
        count = 0
        for i in range(1, n + 1):
            if i not in occ:
                if acc + i > maxSum:
                    break
                else:
                    acc += i
                    count += 1

        return count