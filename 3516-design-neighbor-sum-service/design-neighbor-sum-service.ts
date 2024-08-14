class NeighborSum {
    map = {}

    constructor(grid: number[][]) {
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                const cell = grid[i][j]

                this.map[cell] = { diagonal: 0, adjacent: 0 }
                this.map[cell].diagonal = 
                    (grid[i-1]?.[j-1] || 0) + (grid[i+1]?.[j+1] || 0) +
                    (grid[i-1]?.[j+1] || 0) + (grid[i+1]?.[j-1] || 0)
                this.map[cell].adjacent =
                    (grid[i-1]?.[j] || 0) + (grid[i+1]?.[j] || 0) +
                    (grid[i]?.[j-1] || 0) + (grid[i]?.[j+1] || 0)
            }
        }
    }

    adjacentSum(value: number): number {
        return this.map[value].adjacent
    }

    diagonalSum(value: number): number {
        return this.map[value].diagonal
    }
}

/**
 * Your NeighborSum object will be instantiated and called as such:
 * var obj = new NeighborSum(grid)
 * var param_1 = obj.adjacentSum(value)
 * var param_2 = obj.diagonalSum(value)
 */