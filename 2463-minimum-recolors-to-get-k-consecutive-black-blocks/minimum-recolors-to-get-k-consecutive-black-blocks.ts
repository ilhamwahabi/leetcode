function minimumRecolors(blocks: string, k: number): number {
    // Loop the first k character(s) and count the number of W
    // Loop from k to end of blocks, if char[i] is W then add the count
    // if char[i - k] is W then minus the count
    // If its 0 then early return
    let step = 0
    for (let i = 0; i < k; i++) {
        if (blocks[i] === "W") step++
    }

    let current = step
    for (let i = k; i < blocks.length; i++) {
        if (blocks[i] === "W") current++
        if (blocks[i - k] === "W") current--

        if (current < step) step = current
    }

    return step
};