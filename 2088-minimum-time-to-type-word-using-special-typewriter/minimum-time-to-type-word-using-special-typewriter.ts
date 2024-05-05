function minTimeToType(word: string): number {
    // Count the minimum distance
    // ex: a to y = y(25) - a(1) = 24 OR (1-0) + (26-25) = 2
    // ex: z to b = z(26) - b(2) = 24 OR (26-0) + (26-24) = 
    // Go to that char and increase by 1 (typing)

    let step = 0

    let curr = "a"
    for (let i = 0; i < word.length; i++) {
        const cw = Math.abs(getCharCode(word[i]) - getCharCode(curr))
        const ccw = Math.min(
            getCharCode(curr) + (getCharCode("z") - getCharCode(word[i])),
            getCharCode(word[i]) + (getCharCode("z") - getCharCode(curr))
        )

        const dist = Math.min(cw, ccw)

        step += dist + 1
        curr = word[i]
    }

    return step
};

function getCharCode(c: string) {
    return c.charCodeAt(0) - 96
}