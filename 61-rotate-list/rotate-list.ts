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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    const nodes = []
    
    let curr = head
    while (curr) {
        nodes.push(new ListNode(curr.val))
        curr = curr.next
    }

    const move = k % nodes.length
    const shift = []
    for (let i = 0; i < nodes.length; i++) {
        const item = nodes[(nodes.length - move + i) % nodes.length]
        shift.push(item)
    }

    for (let i = 1; i < shift.length; i++) {
        shift[i - 1].next = shift[i]
    }

    return shift[0] ?? head
};