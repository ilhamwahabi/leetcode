function rotateString(s: string, goal: string): boolean {
    // Iterate from 0 to s.length or until we found the value is same
    let init = s

    for (let i = 0; i < s.length; i++) {
        if (init === goal) return true
        else init = init[init.length - 1] + init.slice(0, init.length - 1)
    }

    return false
};