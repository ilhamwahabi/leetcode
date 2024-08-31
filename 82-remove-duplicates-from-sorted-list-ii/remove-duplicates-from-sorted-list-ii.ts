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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    // Time: O(n + nlog(n) + n) ~ O(nlog(n)), loglinear
    // Space: O(n + n) ~ O(n), linear

    const set = {}
    let curr = head
    while (curr) {
        set[curr.val] ? set[curr.val]++ : set[curr.val] = 1
        curr = curr.next
    }

    const arr = []
    for (const key in set) {
        if (set[key] === 1) arr.push(key)
    }
    if (arr.length === 0) return null

    arr.sort((a,b) => a-b)

    let h = new ListNode(arr[0])
    let c = h
    for (let i = 1; i < arr.length; i++) {
        c.next = new ListNode(arr[i])
        c = c.next
    }
    return h
};