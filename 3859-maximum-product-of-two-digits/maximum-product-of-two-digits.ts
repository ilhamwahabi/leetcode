function maxProduct(n: number): number {
    // Iterate each number in n, find two largest
    // Return their multiply

    // Time: O(n), iteration
    // Space: O(1), only track two items

    let l1 = -Infinity;
    let l2 = -Infinity;

    for (const char of String(n)) {
        if (+char > l1) {
            l2 = l1
            l1 = +char
        } else if (+char > l2) {
            l2 = +char
        }
    }

    return l1 * l2
};