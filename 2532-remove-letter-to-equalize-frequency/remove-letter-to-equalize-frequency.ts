function equalFrequency(word: string): boolean {
    const occur: { [key: string]: number } = {}
    let chars = 0

    for (const char of word) {
        occur[char] ? occur[char]++ : occur[char] = 1
        if (occur[char] === 1) chars++
    }

    const values = Object.values(occur).sort((a,b) => b-a)

    if (values.length === 1) {
        return true
    } else if (values[0] === values[1] + 1) {
        for (let i = 1; i < values.length - 1; i++) {
            if (values[i] !== values[i + 1]) return false
        }
        return true
    } else if (values[0] === values[1]) {
        for (let i = 1; i < values.length - 2; i++) {
            if (values[i] !== values[i + 1]) return false
        }
        if (values[values.length - 1] === 1) return true
        else return false
    } else {
        if (values.length === 2) {
            if (values[values.length - 1] === 1) return true
            else return false
        } else if (values[0] === 1) return true
        else return false
    }    
};