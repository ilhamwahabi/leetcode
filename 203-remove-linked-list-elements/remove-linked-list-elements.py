# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:
        # Time: O(n + n) ~ O(n), linear
        # Space: O(n + n) ~ O(n), linear

        stack = []
        curr = head
        while curr != None:
            if curr.val != val:
                stack.append(curr.val)
            curr = curr.next

        if len(stack) == 0: return None

        new_head = ListNode(stack[0], None)
        curr = new_head
        for i in range(1, len(stack)):
            curr.next = ListNode(stack[i], None)
            curr = curr.next
        return new_head