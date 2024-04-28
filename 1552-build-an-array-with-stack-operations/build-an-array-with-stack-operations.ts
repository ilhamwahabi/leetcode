function buildArray(target: number[], n: number): string[] {
    // 1. Create stack to store number, command to store command
    // 2. Iterate from 1 to n
    // 3. Push i to stack and "Push" to command, if it's not exist in target then pop it
    
    const stack = []
    const command = []

    for (let i = 0; i < n; i++) {
        stack.push(i + 1)
        command.push("Push")

        if (stack[stack.length - 1] !== target[stack.length - 1]) {
            stack.pop()
            command.push("Pop")
        } else {
            if (stack.length - 1 === target.length - 1) break
        }
    }

    return command
};