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

function swapNodes(head: ListNode | null, k: number): ListNode | null {
    // Time: O(n), linear
    // Space: O(n), linear

    const arr = []

    let curr = head
    while (curr) {
        arr.push(curr)
        curr = curr.next
    }

    const temp = arr[k - 1].val
    arr[k - 1].val = arr[arr.length - k].val
    arr[arr.length - k].val = temp

    return head
};