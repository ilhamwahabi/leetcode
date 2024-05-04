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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const stack1 = []
    const stack2 = []

    let curr1 = l1
    while (curr1 !== null) {
        stack1.push(curr1)
        curr1 = curr1.next
    }

    let curr2 = l2
    while (curr2 !== null) {
        stack2.push(curr2)
        curr2 = curr2.next
    }

    if (stack1.length > stack2.length) {
        let rem = 0
        while (stack1.length > 0) {
            const node1 = stack1.pop()
            const node2 = stack2.pop()
            const sum = node1.val + (node2?.val || 0) + (rem / 10)

            rem = sum - (sum % 10)
            node1.val = sum % 10
        }

        if (rem > 0) return new ListNode(rem / 10, l1)
        else return l1
    } else {
        let rem = 0
        while (stack2.length > 0) {
            const node1 = stack1.pop()
            const node2 = stack2.pop()
            const sum = (node1?.val || 0) + node2.val + (rem / 10)

            rem = sum - (sum % 10)
            node2.val = sum % 10
        }

        if (rem > 0) return new ListNode(rem / 10, l2)
        else return l2
    }
};