function evalRPN(tokens: string[]): number {
    // 1. Base: tokens.length === 0 then return tokens[0]
    // 2. Iterate tokens, get slice of three items
    // 3. If the last item in slice is operand, operand those 2 previous item, keep i, else++

    let i = 0
    while (tokens.length > 1) {
        const slice = tokens.slice(i, i + 3)

        if (isNaN(parseInt(slice[1]))) {
            i--
        } else if (isNaN(parseInt(slice[2]))) {
            let result = 0

            if (slice[2] === "+") result = parseInt(slice[0]) + parseInt(slice[1])
            if (slice[2] === "-") result = parseInt(slice[0]) - parseInt(slice[1])
            if (slice[2] === "*") result = parseInt(slice[0]) * parseInt(slice[1])
            if (slice[2] === "/") {
                const res = parseInt(slice[0]) / parseInt(slice[1])
                if (res < 0) result = Math.ceil(res)
                else result = Math.floor(res)
            }

            tokens.splice(i, 3, `${result}`)
        } else {
            i++
        }
    }

    return parseInt(tokens[0])
};