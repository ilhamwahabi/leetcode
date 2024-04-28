class MyStack {
    q1 = []
    q2 = []

    push(x: number): void {
        this.q1.push(x)
    }

    pop(): number {
        while (this.q1.length > 0) {
            this.q2.push(this.q1.shift())
        }

        while (this.q2.length > 1) {
            this.q1.push(this.q2.shift())
        }

        const top = this.q2[0]
        this.q2.shift()

        return top
    }

    top(): number {
        while (this.q1.length > 0) {
            this.q2.push(this.q1.shift())
        }

        let top = null
        while (this.q2.length > 0) {
            if (this.q2.length === 1) top = this.q2[0]
            this.q1.push(this.q2.shift())
        }

        return top
    }

    empty(): boolean {
        return this.q1.length === 0
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */