function mergeAdjacent(nums: number[]): number[] {
    const stack = []

    let i = 0
    while (i <= nums.length) {
        const num = nums[i]
        
        if (stack.at(-1) !== undefined && stack.at(-2) !== undefined && stack.at(-1) === stack.at(-2)) {
            stack.push(stack.pop() + stack.pop())
        } else {
            if (num !== undefined) {
                if (num === stack.at(-1)) {
                    stack.push(num + stack.pop())
                } else {
                    stack.push(num)
                }
            }
            i++
        }
    }

    return stack 
};