function wordSquares(words: string[]): string[][] {
    // [top, left, right, bottom]
    const result = []

    function backtracking(acc = new Set()) {
        if (acc.size === 4) {
            const [top, left, right, bottom] = Array.from(acc)
            if (
                top[0] === left[0] && top[3] === right[0] &&
                bottom[0] === left[3] && bottom[3] === right[3]
            ) {
                result.push(Array.from(acc))
            }
        } else {
            for (let i = 0; i < words.length; i++) {
                const word = words[i]
                
                if (!acc.has(word)) {
                    const set = new Set(acc)
                    backtracking(set.add(word))
                }
            }
        }
    }
    backtracking()

    result.sort((a,b) => {
        if (a[0] < b[0]) { return -1 } else if (a[0] > b[0]) { return 1 }
        if (a[1] < b[1]) { return -1 } else if (a[1] > b[1]) { return 1 }
        if (a[2] < b[2]) { return -1 } else if (a[2] > b[2]) { return 1 }
        if (a[3] < b[3]) { return -1 } else if (a[3] > b[3]) { return 1 }
        return 0
    })

    return result
};