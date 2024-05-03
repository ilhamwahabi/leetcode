class ProductOfNumbers {
    stream = []

    add(num: number): void {
        this.stream.push(num)
    }

    getProduct(k: number): number {
        return this.stream
            .slice(this.stream.length - k, this.stream.length)
            .reduce((acc, curr) => acc * curr, 1)
    }
}

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */