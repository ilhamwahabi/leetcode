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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const nodes = []

    let curr = head
    while (curr) {
        nodes.push(curr)
        curr = curr.next
    }

    const prev = nodes[nodes.length - n - 1]
    const next = nodes[nodes.length - n + 1]

    if (prev && next) prev.next = next
    else if (next) head = next
    else if (prev) prev.next = null
    else head = null

    return head
};