function longestNiceSubstring(s: string): string {
    let longest = ""

    function backtrack(str = "", index = 0, all = new Set(), unq = new Set()) {
        if (all.size === unq.size) {
            if (longest === "" || str.length > longest.length) longest = str
        }
        if (s[index] === undefined) return

        if (str === "") {
            for (let i = 0; i < s.length; i++) {
                const char = s[i]

                backtrack(
                    char,
                    i + 1,
                    new Set([char.toUpperCase(), char.toLowerCase()]),
                    new Set([char])
                )
            }
        } else {
            const char = s[index]
            const allSet = new Set(all)
            const unqSet = new Set(unq)

            allSet.add(char.toUpperCase())
            allSet.add(char.toLowerCase())
            unqSet.add(char)

            backtrack(str + char, index + 1, allSet, unqSet)
        }
    }
    backtrack()

    return longest
};