function dailyTemperatures(temperatures: number[]): number[] {
    const stack = []
    const result = []

    for (let i = temperatures.length - 1; i >= 0; i--) {
        const temp = temperatures[i]

        if (stack.length === 0) {
            stack.push({ temp, next: 0 })
            result.push(0)
        } else {
            let days = 1

            while (stack.length > 0 && temp >= stack.at(-1).temp) {
                days += stack.pop().next
                if (stack.length === 0) days = 0
            }

            stack.push({ temp, next: days })
            result.push(days)
        }
    }

    return result.reverse()
};