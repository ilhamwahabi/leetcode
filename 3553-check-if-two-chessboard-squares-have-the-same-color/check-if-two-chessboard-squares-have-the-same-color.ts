function checkTwoChessboards(coordinate1: string, coordinate2: string): boolean {
    const [col1, row1] = coordinate1.split("")
    const [col2, row2] = coordinate2.split("")

    const coor1 = col1.charCodeAt(0) + +row1
    const coor2 = col2.charCodeAt(0) + +row2

    return coor1 % 2 === coor2 % 2
};