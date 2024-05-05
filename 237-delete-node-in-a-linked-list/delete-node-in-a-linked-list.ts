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

/**
 Do not return anything, modify it in-place instead.
 */
function deleteNode(node: ListNode | null): void {
    // Replace current value with next element, replace
    // If there is no next next element, then also direct to null

    let curr = node
    while (curr && curr.next) {
        curr.val = curr.next.val
        if (curr.next.next === null) curr.next = null
        curr = curr.next
    }
};