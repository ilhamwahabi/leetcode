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

function nextLargerNodes(head: ListNode | null): number[] {
    const nodes = []
    let curr = head
    while (curr) {
        nodes.push(curr)
        curr = curr.next
    }

    const result = []
    const stack = []
    for (let i = nodes.length - 1; i >= 0; i--) {
        const node = nodes[i]

        while (stack.length > 0 && node.val >= stack.at(-1).val) {
            stack.pop()
        }

        result.push(stack.at(-1)?.val ?? 0)
        stack.push(node)
    }

    return result.reverse()
};