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

function pairSum(head: ListNode | null): number {
    // Save each value to stack
    // Loop from front and back, get the max

    const stack = []

    let curr = head
    while (curr) {
        stack.push(curr.val)
        curr = curr.next
    }

    let max = 0
    for (let i = 0; i < stack.length; i++) {
        const add = stack[i] + stack[stack.length - 1 - i]
        if (add > max) max = add
    }
    return max
};