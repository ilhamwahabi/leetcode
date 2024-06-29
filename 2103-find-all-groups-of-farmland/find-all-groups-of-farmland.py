class Solution:
    def findFarmland(self, land: List[List[int]]) -> List[List[int]]:
        # Iterate matrix
        # Find cell=1 where top is None or 0 and left is None is 0
        # Iterate to right then bottom until we found cell=1 where bottom is None or 0 ...
        # Append to result
        res = []

        for i in range(len(land)):
            for j in range(len(land[i])):
                if (
                    land[i][j] == 1 and
                    (i == 0 or land[i-1][j] == 0) and
                    (j == 0 or land[i][j-1] == 0) 
                ):
                    x = i
                    y = j

                    while land[x][y] == 1:
                        if (
                            land[x][y] == 1 and
                            (x == len(land) - 1 or land[x+1][y] == 0) and
                            (y == len(land[i]) - 1 or land[x][y+1] == 0) 
                        ):
                            res.append([i, j, x, y])
                            break

                        if x < len(land) - 1 and land[x+1][y] == 1: x += 1
                        if y < len(land[i]) - 1 and land[x][y+1] == 1: y += 1

        return res