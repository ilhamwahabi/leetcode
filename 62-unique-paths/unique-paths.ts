function uniquePaths(m: number, n: number): number {
    // Time: O(?)
    // Space: O(n)

    const memo = {}

    function recursion(row, col): number {
        if (memo[`${row}-${col}`] !== undefined) return memo[`${row}-${col}`]
        if (row > m || col > n) return 0
        if (row === m && col === n) return 1

        const result = recursion(row + 1, col) + recursion(row, col + 1)
        memo[`${row}-${col}`] = result

        return result
    }

    return recursion(1, 1)
};