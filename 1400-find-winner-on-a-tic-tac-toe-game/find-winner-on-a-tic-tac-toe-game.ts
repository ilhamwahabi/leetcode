function tictactoe(moves: number[][]): string {
    const board = [[], [], []]

    for (let i = 0; i < moves.length; i++) {
        const [x, y] = moves[i]
        const mark = i % 2 === 0 ? 'X' : 'O'
        const player = i % 2 === 0 ? 'A' : 'B'

        board[x][y] = mark
        if (checkResult(board, mark)) return player
    }

    return moves.length < 9 ? 'Pending' : 'Draw'
};

function checkResult(board: any[][], mark: string) {
    const res = `${mark}${mark}${mark}`

    if (`${board[0][0]}${board[0][1]}${board[0][2]}` === res) return true
    if (`${board[1][0]}${board[1][1]}${board[1][2]}` === res) return true
    if (`${board[2][0]}${board[2][1]}${board[2][2]}` === res) return true

    if (`${board[0][0]}${board[1][0]}${board[2][0]}` === res) return true
    if (`${board[0][1]}${board[1][1]}${board[2][1]}` === res) return true
    if (`${board[0][2]}${board[1][2]}${board[2][2]}` === res) return true

    if (`${board[0][0]}${board[1][1]}${board[2][2]}` === res) return true
    if (`${board[0][2]}${board[1][1]}${board[2][0]}` === res) return true

    return false
}