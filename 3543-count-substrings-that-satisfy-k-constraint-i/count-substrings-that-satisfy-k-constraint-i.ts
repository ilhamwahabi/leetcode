function countKConstraintSubstrings(s: string, k: number): number {
    let count = 0

    for (let i = 0; i < s.length; i++) {
        const map = { "0": 0, "1": 0 }
        map[s[i]]++
        if (map["0"] <= k || map["1"] <= k) count++

        for (let j = i + 1; j < s.length; j++) {
            map[s[j]]++
            if (map["0"] <= k || map["1"] <= k) count++
        }
    }

    return count
};