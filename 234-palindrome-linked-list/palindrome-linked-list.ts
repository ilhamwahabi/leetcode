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

function isPalindrome(head: ListNode | null): boolean {
    let curr = head

    let x = ""
    let y = ""
    while (curr) {
        x = x + curr.val
        y = curr.val + y

        curr = curr.next
    }

    return x === y
};