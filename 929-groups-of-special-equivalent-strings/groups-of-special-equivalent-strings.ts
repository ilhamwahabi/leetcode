function numSpecialEquivGroups(words: string[]): number {
    // Iterate words
    // Split word to string[], sort the even and odd
    // Store it in map
    // Return length of map key

    const map = {}
    let group = 0

    words.forEach(word => {
        const even = []
        const odd = []

        for (let i = 0; i < word.length; i++) {
            if (i % 2 === 0) even.push(word[i])
            else odd.push(word[i])
        }

        even.sort()
        odd.sort()

        const key = even.join("") + odd.join("")
        if (!map[key]) {
            map[key] = true
            group++
        }
    })

    return group
};