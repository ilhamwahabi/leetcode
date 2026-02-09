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

function splitListToParts(head: ListNode | null, k: number): Array<ListNode | null> {
    const nodes = []
    let curr = head
    while (curr) {
        nodes.push(curr)
        curr = curr.next
    }

    const result = []
    let mod = nodes.length % k
    let start = 0
    let length = Math.floor(nodes.length / k) + Math.min(mod, 1)

    for (let i = 0; i < nodes.length; i++) {
        if (i === start + length - 1) {
            result.push(nodes[start])
            nodes[i].next = null
            if (mod > 0) mod--

            start = i + 1
            length = Math.floor(nodes.length / k) + Math.min(mod, 1)
        }
    }

    return Object.assign(new Array(k).fill(null), result)
};