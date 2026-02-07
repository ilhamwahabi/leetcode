function canSeePersonsCount(heights: number[]): number[] {
    const result = []
    const stack = []

    for (let i = heights.length - 1; i >= 0; i--) {
        const height = heights[i]
        
        if (stack.length === 0) {
            stack.push({ height, see: 0 })
            result.push(0)
        } else {
            if (stack.at(-1).height > height) {
                stack.push({ height, see: 1 })
                result.push(1)
            } else {
                let see = 0

                let curr = stack.at(-1)
                while (curr) {
                    if (stack.at(-1).height <= height) {
                        see++
                        stack.pop()
                        curr = stack.at(-1)
                    } else {
                        see++
                        break
                    }
                }

                stack.push({ height, see })
                result.push(see)
            }
        }
    }

    return result.reverse()
};