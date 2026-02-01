function camelMatch(queries: string[], pattern: string): boolean[] {
    return queries.map(query => {
        let i = 0
        let j = 0

        while (i < query.length) {
            const char = query[i]

            const isUpperCaseChar = char.toUpperCase() === char

            if (char === pattern[j]) {
                j++
            } else if (isUpperCaseChar) {
                return false
            }

            i++
        }

        return j === pattern.length
    })
};