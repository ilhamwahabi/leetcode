class MinStack {    
    stack = []

    push(val: number): void {
        this.stack.push({
            val,
            min: Math.min(val, this.stack.at(-1)?.min ?? Infinity)
        })
    }

    pop(): void {
        this.stack.pop()
    }

    top(): number {
        return this.stack.at(-1).val
    }

    getMin(): number {
        return this.stack.at(-1).min
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */