function evalRPN(tokens: string[]): number {
    // 1. Push all elements into stack, if we counter operands, pop the last 2 and do ops
    // 2. Push the result to stack
    // 3. Iterate until tokens.length

    const stack = []

    for (let i = 0; i < tokens.length; i++) {
        let item: number | string = tokens[i]

        if (isNaN(parseInt(tokens[i]))) {
            const second = stack.pop()
            const first = stack.pop()

            if (tokens[i] === "+") item = parseInt(first) + parseInt(second)
            if (tokens[i] === "-") item = parseInt(first) - parseInt(second)
            if (tokens[i] === "*") item = parseInt(first) * parseInt(second)
            if (tokens[i] === "/") {
                const result = parseInt(first) / parseInt(second)
                if (result < 0) item = Math.ceil(result)
                else item = Math.floor(result)
            }
        }

        stack.push(`${item}`)
    }

    return parseInt(stack[0])
};