function balancedStringSplit(s: string): number {
    let count = 0

    const map = { "L": 0, "R": 0 }
    for (const char of s) {
        map[char] += 1
        if (map["L"] == map["R"]) count++
    }

    return count
};