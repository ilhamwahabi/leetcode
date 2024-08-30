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

function deleteMiddle(head: ListNode | null): ListNode | null {
    // Time: O(n + n) ~ O(n), linear
    // Space: O(1), constant

    let length = 0
    let curr = head
    while (curr) {
        curr = curr.next
        length++
    }

    const mid = Math.floor(length / 2)
    let i = 0
    let prev = null
    curr = head
    while (curr) {
        if (i === mid) {
            if (prev === null) {
                head = curr.next
                curr = head
            } else {
                prev.next = curr.next
                curr = prev.next
            }
            break
        } else {
            prev = curr
            curr = curr.next
            i++
        }
    }

    return head
};