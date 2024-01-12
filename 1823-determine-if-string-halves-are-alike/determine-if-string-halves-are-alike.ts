function halvesAreAlike(s: string): boolean {
    let count = 0

    const vowel = /[aeiouAEIOU]/
    const half = s.length / 2
    for (let i = 0; i < half; i++) {
        if (vowel.test(s[i])) count++
        if (vowel.test(s[half + i])) count--
    }

    return count == 0
};