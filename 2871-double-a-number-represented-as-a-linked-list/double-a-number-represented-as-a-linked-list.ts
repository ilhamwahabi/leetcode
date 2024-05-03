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

function doubleIt(head: ListNode | null): ListNode | null {
    // Store each head in stack
    // Pop them and times by 2, store if it more than 9

    const stack = []

    let curr = head
    while (curr) {
        stack.push(curr)
        curr = curr.next
    }

    let prev = 0
    while (stack.length > 0) {
        const item = stack.pop()
        const val = (item.val * 2) + (prev / 10)

        prev = val - (val % 10)
        item.val = val % 10
    }

    if (prev > 0) return new ListNode(prev / 10, head)
    return head
};