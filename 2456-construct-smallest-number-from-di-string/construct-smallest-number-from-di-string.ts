function smallestNumber(pattern: string): string {
    let min = ""

    function backtrack(output: string, current: number, used: { [key: number]: boolean }) {
        if (output.length === pattern.length + 1) {
            if (min === "" || output < min) min = output
        } else {
            for (let i = 1; i <= 9; i++) {
                const char = pattern[current]
                const isInc = char === "I" && i > +output.at(-1)
                const isDec = char === "D" && i < +output.at(-1)
                
                const isUsed = used[i]
                const isMatch = output === "" || isInc || isDec || char === undefined

                if (!isUsed && isMatch) {
                    backtrack(output + String(i), current + 1, { ...used, [i]: true })
                }
            }
        }
    }
    backtrack("", -1, {})

    return min
};