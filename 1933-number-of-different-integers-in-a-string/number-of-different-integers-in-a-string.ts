function numDifferentIntegers(word: string): number {
    // Iterate word, find number: check using regex and if so store it
    // At end store in map, parse it first to handle leading 0
    // Return total map key

    const map = {}
    let count = 0

    let num = ""
    for (let i = -1; i < word.length + 1; i++) {
        const curr = word[i]
        const next = word[i+1]
        
        if (/[0-9]/.test(curr)) {
            if (
                !(curr === "0" && num === "") ||
                curr === "0" && !/[0-9]/.test(next)
            ) {
                num += curr
            }
        } else {
            if (num.length > 0) {
                if (!map[num]) {
                    count++
                    map[num] = true
                }
                num = ""
            }
        }
    }
 
    return count
};