function areAlmostEqual(s1: string, s2: string): boolean {
    // Store index that is not same
    // If more than 2 then false
    // If false then check if a[i] === b[j] && a[j] === b[i]

    const diff = []
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) diff.push(i)
    }

    if (diff.length > 2) return false
    return s1[diff[0]] === s2[diff[1]] && s1[diff[1]] === s2[diff[0]]
};