function validateStackSequences(pushed: number[], popped: number[]): boolean {
    let push = 0
    let pop = 0
    const stack = []

    while (push < pushed.length || pop < popped.length) {
        const pushItem = pushed[push]
        const popItem = popped[pop]

        if (stack.at(-1) === popItem) {
            stack.pop()
            pop++
        } else if (pushItem !== undefined) {
            stack.push(pushItem)
            push++
        } else {
            return false
        }
    }

    return true
};