/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function spiralMatrix(m: number, n: number, head: ListNode | null): number[][] {
    // Generate matrix, fill with -1
    // Iterate linkedlist, append it to row right -> col down -> row left -> col up -> ...

    const matrix = []
    for (let i = 0; i < m; i++) matrix.push(Array(n).fill(-1))

    let it = "row"
    let dir = "right"
    const row = {}
    const col = {}

    let r = 0
    let c = 0
    let curr = head
    while (curr) {
        matrix[r][c] = curr.val

        if (it === "row") {
            if (dir === "right") {
                if (c < n - 1 && !col[c + 1]) {
                    c++
                } else {
                    row[r] = true
                    r++
                    it = "col"
                    dir = "down"
                }
            } else if (dir === "left") {
                if (c > 0 && !col[c - 1]) {
                    c--
                } else {
                    row[r] = true
                    r--
                    it = "col"
                    dir = "up"
                }
            }
        } else if (it === "col") {
            if (dir === "down") {
                if (r < m - 1 && !row[r + 1]) {
                    r++
                } else {
                    col[c] = true
                    c--
                    it = "row"
                    dir = "left"
                }
            } else if (dir === "up") {
                if (r > 0 && !row[r - 1]) {
                    r--
                } else {
                    col[c] = true
                    c++
                    it = "row"
                    dir = "right"
                }
            }
        }

        curr = curr.next
    }

    return matrix
};