function distinctIntegers(n: number): number {
    // Time: O(n), linear
    // Space: O(),

    const set = new Set()

    function recursive(num: number) {
        if (!set.has(num)) {
            set.add(num)

            if (num % 2 === 0 && num > 2) {
                recursive(num - 1)
            } else if (num % 2 === 1) {
                for (let i = 2; i < num; i += 2) {
                    recursive(i)
                }
            }
        }
    }
    recursive(n)

    return set.size
};