function commonChars(words: string[]): string[] {
    let map = null

    words.forEach(word => {
        const dict = {}
        for (const char of word) {
            dict[char] ? dict[char]++ : dict[char] = 1
        }

        const newMap = {}
        for (const key in dict) {
            if (map === null || dict[key] <= map[key]) {
                newMap[key] = dict[key]
            } else if (map === null || map[key] <= dict[key]) {
                newMap[key] = map[key]
            }
        }

        map = { ...newMap }
    })

    const result = []
    for (const key in map) {
        result.push(...Array(map[key]).fill(key))
    }

    return result
};