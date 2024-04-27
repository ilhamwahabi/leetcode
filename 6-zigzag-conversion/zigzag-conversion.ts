function convert(s: string, numRows: number): string {
    // 1. Create array of string, up to numRows
    // 2. Create variable i to track which row we currently in
    // 3. For each step append char to the row
    // 4. Return joined string

    const result = []

    for (let i = 1; i <= numRows; i++) {
        result.push("")
    }

    let i = 0
    let direction = "bottom"
    let j = 0
    while (j < s.length) {
        result[i] += s[j]

        j++
        if (i === 0) direction = "bottom"
        else if (i === numRows - 1) direction = "top"

        if (direction === "bottom") i = Math.min(numRows - 1, i + 1)
        else if (direction === "top") i = Math.max(0, i - 1)
    }

    return result.join("")
};