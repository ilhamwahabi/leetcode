class Solution:
    def canMakeSquare(self, grid: List[List[str]]) -> bool:
        def rep(s: str):
            if s == "B": return 1
            return 0

        topLeft = rep(grid[0][0]) + rep(grid[0][1]) + rep(grid[1][0]) + rep(grid[1][1])
        topRight = rep(grid[0][1]) + rep(grid[0][2]) + rep(grid[1][1]) + rep(grid[1][2])
        bottomLeft = rep(grid[1][0]) + rep(grid[1][1]) + rep(grid[2][0]) + rep(grid[2][1])
        bottomRight = rep(grid[1][1]) + rep(grid[1][2]) + rep(grid[2][1]) + rep(grid[2][2])

        if topLeft != 2 or topRight != 2 or bottomLeft != 2 or bottomRight != 2: return True
        return False