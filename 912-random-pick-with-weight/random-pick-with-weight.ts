class Solution {
    // [1,2,3], sum=6, 1/6 3/6 6/6 
    // [1,2,3,4], sum=10, 1/10 3/10 6/10 10/10

    weight = []

    constructor(w: number[]) {
        const sum = w.reduce((acc, curr) => acc + curr, 0)

        // We build 'right side of the range' for the result to check
        for (let i = 0; i < w.length; i++) {
            const weight = w[i] / sum

            if (i === 0) this.weight.push(weight)
            else this.weight.push(weight + this.weight[i - 1])
        }
    }

    pickIndex(): number {
        const random = Math.random()
        // We start with checking from middle element
        let left = 0
        let right = this.weight.length - 1

        while (left < right) {
            const mid = Math.floor((left + right) / 2)
    
            // We forward the middle if its bigger
            if (random > this.weight[mid]) left = mid + 1
            else right = mid
        }

        return left
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */