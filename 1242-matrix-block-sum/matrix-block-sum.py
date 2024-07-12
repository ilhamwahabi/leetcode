class Solution:
    def matrixBlockSum(self, mat: List[List[int]], k: int) -> List[List[int]]:
        result = []

        for i in range(len(mat)):
            row = []
            for j in range(len(mat[i])):
                total = 0
                for a in range(max(i - k, 0), min(i + k + 1, len(mat))):
                    for b in range(max(j - k, 0), min(j + k + 1, len(mat[i]))):
                        total += mat[a][b]
                row.append(total)
            result.append(row)

        return result