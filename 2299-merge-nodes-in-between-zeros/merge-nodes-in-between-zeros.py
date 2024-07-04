# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:
        curr = head
        prev = None
        while curr is not None:
            if curr.val == 0:
                if prev is None:
                    prev = curr
                    curr = prev.next
                    head = curr
                else:
                    prev.next = curr.next
                    curr = prev.next
            else:
                if curr.next is not None and curr.next.val != 0:
                    curr.val += curr.next.val
                    curr.next = curr.next.next
                else:
                    prev = curr
                    curr = curr.next
        
        return head