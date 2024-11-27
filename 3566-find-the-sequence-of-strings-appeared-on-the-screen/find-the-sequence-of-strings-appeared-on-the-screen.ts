function stringSequence(target: string): string[] {
    const curr = ["a"]
    const result = ["a"]

    let i = 0
    while (curr.join("") !== target && i < target.length) {
        const charCurr = curr[i]
        const charTarget = target[i]
        
        if (charCurr !== charTarget) {
            curr[i] = String.fromCharCode(charCurr.charCodeAt(0) + 1)
        } else {
            curr.push("a")
            i++
        }

        result.push(curr.join(""))
    }

    return result
};