function minAddToMakeValid(s: string): number {
    // Create stack to store 
    
    const stack = []

    for (const p of s) {
        if (p === ")" && stack[stack.length - 1] === "(") stack.pop()
        else stack.push(p)
    }

    return stack.length
};