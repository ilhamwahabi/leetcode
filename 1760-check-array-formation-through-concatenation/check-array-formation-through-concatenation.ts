function canFormArray(arr: number[], pieces: number[][]): boolean {
    // Store all location for each arr item in map
    // Iterate all pieces, find location of each item in map
    // Check if its smaller than previous found location, return false

    const location = {}
    arr.forEach((a, i) => { location[a] = i })

    for (let i = 0; i < pieces.length; i++) {
        const pos = []
        const piece = pieces[i]
        
        for (let j = 0; j < piece.length; j++) {
            const item = piece[j]

            if (location[item] === undefined || (j > 0 && location[item] !== pos[pos.length - 1] + 1)) return false
            else pos.push(location[item])
        }
    }

    return true
};