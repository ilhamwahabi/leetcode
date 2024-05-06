function countBattleships(board: string[][]): number {
    // Iterate matrix, if we found any, traverse it col/row, store in map to mark it
    
    const mark = {}
    let bs = 0

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === "X" && !mark[`${i}-${j}`]) {
                bs++
                mark[`${i}-${j}`] = true

                traverse(board, i-1, j, mark, "N")
                traverse(board, i+1, j, mark, "S")
                traverse(board, i, j-1, mark, "W")
                traverse(board, i, j+1, mark, "E")
            }
        }
    }

    return bs
};

function traverse(
    board: string[][], row: number, col: number,
    mark: Object, dir: "N" | "S" | "W" | "E"
) {
    if (board[row]?.[col] === "X") {
        mark[`${row}-${col}`] = true

        if (dir === "N") traverse(board, row-1, col, mark, dir)
        if (dir === "S") traverse(board, row+1, col, mark, dir)
        if (dir === "W") traverse(board, row, col-1, mark, dir)
        if (dir === "E") traverse(board, row, col+1, mark, dir)
    }
}