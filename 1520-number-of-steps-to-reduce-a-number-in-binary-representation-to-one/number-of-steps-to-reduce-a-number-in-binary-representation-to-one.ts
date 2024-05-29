function numSteps(s: string): number {
    // If last char is 1: last char become 0 and next 0 become 1
    // If last char is 0: remove last char

    const b = s.split("")
    let step = 0

    while (b.length > 1) {
        if (b[b.length - 1] === "0") {
            b.pop()
        } else {
            let nextZeroIdx = -1
            for (let i = b.length - 1; i >= 0; i--) {
                if (b[i] === "1") { b[i] = "0" }
                else { nextZeroIdx = i; break; }
            }

            if (nextZeroIdx === -1) b.unshift("1")
            else b[nextZeroIdx] = "1"
        }
        
        step++
    }

    return step
};