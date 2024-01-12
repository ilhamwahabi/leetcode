function halvesAreAlike(s: string): boolean {
    let vowel1 = 0
    let vowel2 = 0

    const vowel = /[aeiouAEIOU]/
    const half = s.length / 2
    for (let i = 0; i < half; i++) {
        if (vowel.test(s[i])) vowel1++
        if (vowel.test(s[half + i])) vowel2++
    }

    return vowel1 == vowel2
};