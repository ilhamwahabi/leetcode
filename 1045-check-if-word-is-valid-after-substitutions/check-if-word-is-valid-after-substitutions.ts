function isValid(s: string): boolean {
    // Add each element to stack, if i-2=c i-1=b i=a, pop them
    // Return is length stack is 0

    const stack = []

    for (const char of s) {
        if (char === "c" && stack[stack.length - 1] === "b" && stack[stack.length - 2] === "a") {
            stack.pop()
            stack.pop()
        } else {
            stack.push(char)
        }
    }

    return stack.length === 0
};