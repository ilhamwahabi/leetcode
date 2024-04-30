function addToArrayForm(num: number[], k: number): number[] {
    // 1. Store all digits of k in array
    // 2. Iterate from back to front of the digits array
    // 3. If its exceed 10, add one to the next front of num array

    const digits = []
    const added = String(k)
    for (let i = 0; i < added.length; i++) {
        digits.push(parseInt(added[i]))
    }

    const n = [...num]
    for (let i = 0; i < digits.length; i++) {
        const a = digits[digits.length - 1 - i] || 0
        const b = n[n.length - 1 - i] || 0

        let sum = a + b
        if (a + b >= 10) {
            collapseAdd(n, n.length - 1 - i - 1)
            sum -= 10
        }

        if (n.length - 1 - i === -1) n.unshift(sum)
        else n[n.length - 1 - i] = sum
    }
    return n
};

function collapseAdd(arr: number[], start: number) {
    if (start === -1) arr.unshift(1)
    else {
        const result = arr[start] + 1

        if (result === 10) {
            arr[start] = 0
            collapseAdd(arr, start - 1)
        } else {
            arr[start] = result
        }
    }
}