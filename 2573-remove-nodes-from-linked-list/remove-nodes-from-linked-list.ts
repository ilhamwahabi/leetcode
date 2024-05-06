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

function removeNodes(head: ListNode | null): ListNode | null {
    // Get all list element
    // Iterate from back, find each maximum value so far
    // Make it node

    let stack = []
    while (head) {
        stack.push(head.val)
        head = head.next
    }

    let max = 0
    let c = null
    while (stack.length > 0) {
        const val = stack.pop()

        if (val >= max) {
            max = val
            c = new ListNode(val, c)
        }
    }
    return c
};