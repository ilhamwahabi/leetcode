function charToCharCode(char) {
    const aCharCode = 'a'.charCodeAt(0);
    const charCode = char.charCodeAt(0);
    const offset = charCode - aCharCode;

    return offset;
}

function numberOfLines(widths: number[], s: string): number[] {
    let row = 1
    let curr = 0

    for (const char of s) {
        const width = widths[charToCharCode(char)]

        if (curr + width > 100) {
            row++
            curr = width
        } else {
            curr += width
        }
    }

    return [row, curr]
};