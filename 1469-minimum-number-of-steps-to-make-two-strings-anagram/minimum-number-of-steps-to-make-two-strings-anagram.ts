function minSteps(s: string, t: string): number {
    const map = {}

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] != undefined) map[s[i]]++
        else map[s[i]] = 1

        if (map[t[i]] != undefined) map[t[i]]--
        else map[t[i]] = -1
    }

    let step = 0
    for (const key in map) {
        if (map[key] < 0) {
            step += map[key]
        }
    }

    return Math.abs(step)
};