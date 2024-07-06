class Solution:
    def chalkReplacer(self, chalk: List[int], k: int) -> int:
        # Sum all the chalk, get the remain = k % sum
        # Iterate chalk, if chalk[i] < remain: return i, else remain -= chalk[i] and i++
        sum = 0
        for item in chalk:
            sum += item
        remain = k % sum

        for i in range(len(chalk)):
            if remain < chalk[i]:
                return i
            else:
                remain -= chalk[i]
        
        return -1