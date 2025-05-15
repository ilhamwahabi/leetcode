function maxProduct(n: number): number {
    // Iterate each number in n, find two largest
    // Return their multiply

    // Time: O(n), iteration
    // Space: O(1), only track two items

    let l1 = -Infinity;
    let l2 = -Infinity;

    let curr = n
    while (curr > 0) {
        const mod = curr % 10
        curr = Math.floor(curr / 10)

        if (mod > l1) {
            l2 = l1
            l1 = mod
        } else if (mod > l2) {
            l2 = mod
        }
    }

    return l1 * l2
};