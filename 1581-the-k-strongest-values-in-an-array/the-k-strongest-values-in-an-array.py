import functools

class Solution:
    def getStrongest(self, arr: List[int], k: int) -> List[int]:
        arr.sort()
        med = arr[(len(arr) - 1) // 2]

        def compare(a, b):
            if abs(a - med) == abs(b - med):
                return -1
            else:
                return abs(b - med) - abs(a - med)

        arr.sort(key=functools.cmp_to_key(compare))

        return arr[:k]