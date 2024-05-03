class ProductOfNumbers {
    stream = [1];
    // add: [1] + 2 -> [1,2*1] + 3 -> [1,2*1,2*1*3] + 0 -> [1,2*1,2*1*3,2*1*3*0]
    // getProduct: k = 1 -> 2*1*3 / 2*1 = 3, k = 2 -> 2*1*3 / 1 = 2*3

    add(num: number): void {
        if (num === 0) this.stream = [1];
        else this.stream.push(this.stream[this.stream.length - 1] * num);
    }

    getProduct(k: number): number {
        if (k >= this.stream.length) return 0; // that mean we found 0 before
        return this.stream[this.stream.length - 1] / this.stream[this.stream.length - k - 1];
    }
}

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */