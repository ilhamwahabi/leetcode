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

function detectCycle(head: ListNode | null): ListNode | null {
    const visited = new Set()
    let curr = head

    while (curr) {
        if (visited.has(curr)) return curr
        visited.add(curr)
        curr = curr.next
    }
    
    return null
};