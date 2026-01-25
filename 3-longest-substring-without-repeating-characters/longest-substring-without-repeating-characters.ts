function lengthOfLongestSubstring(s: string): number {
    let max = 0
    const map = {}

    function backtrack(key: number, index = 0) {
        max = Math.max(max, map[key].size)

        const char = s[index]
        if (char && !map[key].has(char)) {
            map[key].add(char)
            backtrack(key, index + 1)
        }
    }
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        
        map[i] = new Set([char])
        backtrack(i, i + 1)
    }

    return max
};