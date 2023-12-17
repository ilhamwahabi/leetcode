/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public var val: Int
 *     public var next: ListNode?
 *     public init() { self.val = 0; self.next = nil; }
 *     public init(_ val: Int) { self.val = val; self.next = nil; }
 *     public init(_ val: Int, _ next: ListNode?) { self.val = val; self.next = next; }
 * }
 */
class Solution {
    func addTwoNumbers(_ l1: ListNode?, _ l2: ListNode?) -> ListNode? {
        var acc: ListNode?
        var temp: ListNode?

        var temp1 = l1
        var temp2 = l2

        var isOver = false
        while (temp1 != nil || temp2 != nil) {
            var sum = 0
            if (isOver) { sum += 1; isOver = false }

            if let t1 = temp1 {
                sum += t1.val
                temp1 = t1.next
            }
            if let t2 = temp2 {
                sum += t2.val
                temp2 = t2.next
            }

            if (sum >= 10) { isOver = true; sum -= 10 }

            if (temp == nil) {
                temp = ListNode(sum)
                acc = temp
            } else {
                temp!.next = ListNode(sum)
                temp = temp!.next
            }
        }

        if (isOver) { temp!.next = ListNode(1); isOver = false }

        return acc
    }
}