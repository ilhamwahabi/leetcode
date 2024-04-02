function countPrefixSuffixPairs(words: string[]): number {
    let count = 0
    
    for (let i = 0; i < words.length - 1; i++) {
        for (let j = i + 1; j < words.length; j++) {
            let isValid = true
            let k = 0
            while (isValid && k < words[i].length) {
                if (
                    words[i][k] !== words[j][k] ||
                    words[i][words[i].length - 1 - k] !== words[j][words[j].length - 1 - k]
                ) {
                    isValid = false
                } else {
                    k++
                }
            }
            if (isValid) count++
        }
    }

    return count
};