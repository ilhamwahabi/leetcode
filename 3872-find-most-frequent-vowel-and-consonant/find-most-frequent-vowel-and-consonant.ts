function maxFreqSum(s: string): number {
    // Iterate s
    // Add it to counting map
    // Track the maximum for vowel and non vowel, return it

    // Time: O(n), iteration of s
    // Space: O(n), store the occurance

    const map = {}
    let maxVowel = 0
    let maxNonVowel = 0

    for (const char of s) {
        map[char] ? map[char]++ : map[char] = 1

        if (char.match(/[aiueo]/)) maxVowel = Math.max(maxVowel, map[char])
        else maxNonVowel = Math.max(maxNonVowel, map[char])
    }

    return maxVowel + maxNonVowel
};