function maxFreqSum(s: string): number {
    // Iterate s
    // Add it to counting map
    // Track the maximum for vowel and non vowel, return it

    // Time: O(n), iteration of s
    // Space: O(n), store the occurance

    const map = new Array(26).fill(0)
    const vowels = new Set(["a", "i", "u", "e", "o"])
    let maxVowel = 0
    let maxNonVowel = 0

    for (const char of s) {
        const index = char.charCodeAt(0) - 97
        map[index]++

        if (vowels.has(char)) maxVowel = Math.max(maxVowel, map[index])
        else maxNonVowel = Math.max(maxNonVowel, map[index])
    }

    return maxVowel + maxNonVowel
};