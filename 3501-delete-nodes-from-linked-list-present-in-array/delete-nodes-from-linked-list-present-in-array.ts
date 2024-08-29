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

function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
    // Time: O(n), linear
    // Space: O(m), linear

    const map = {}
    nums.forEach(num => { map[num] = true })

    let prev = null
    let curr = head
    while (curr) {
        if (map[curr.val]) {
            if (prev === null) {
                head = curr.next
                curr = head
            } else {
                prev.next = curr.next
                curr = prev.next
            }
        } else {
            prev = curr
            curr = curr.next
        }
    }

    return head
};