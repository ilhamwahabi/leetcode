function minCost(colors: string, neededTime: number[]): number {
    // Iterate colors
    // Save previous el in stack, if we found different element then sort stack and get the min

    let stack = []
    let times = []
    let total = 0

    for (let i = 0; i <= colors.length; i++) {
        const color = colors[i]
        const time = neededTime[i]
        
        if (stack[stack.length - 1] === color || i === 0) {
            stack.push(color)
            times.push(time)
        } else if (stack[stack.length - 1] !== color || i === colors.length) {
            if (stack.length > 1) {
                times.sort((a,b) => b-a)
                total += times.reduce((acc, curr) => acc + curr, 0) - times[0]
            }
            stack = [color]
            times = [time]
        }
    }

    return total
};