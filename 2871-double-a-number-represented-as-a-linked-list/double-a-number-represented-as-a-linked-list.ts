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
    // Iterate while it have curr and curr.next
    // Times both of them by 2, if next is > 10, add 1 to curr, if curr > 10

    let curr = head
    let prev = null
    while (curr) {
        const double = curr.val * 2
        const carry = Math.floor(double / 10)

        if (carry > 0) {
            if (prev === null) head = new ListNode(carry, head)
            else prev.val = prev.val + carry
        }

        curr.val = double % 10
        prev = curr
        curr = curr.next
    }

    return head
};