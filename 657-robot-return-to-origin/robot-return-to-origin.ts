function judgeCircle(moves: string): boolean {
    let x = 0
    let y = 0

    for (const char of moves) {
        switch (char) {
            case "U": y++; break;
            case "D": y--; break;
            case "L": x--; break;
            case "R": x++; break;
        }
    }

    return x === 0 && y === 0
};