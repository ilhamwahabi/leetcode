# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def getGCD(self, a: int, b: int) -> int:
        result = min(a,b)

        while result > 0:
            if a % result == 0 and b % result == 0:
                break
            result -= 1

        return result

    def insertGreatestCommonDivisors(self, head: Optional[ListNode]) -> Optional[ListNode]:
        curr = head
        while curr is not None and curr.next is not None:
            gcd = ListNode(
                self.getGCD(curr.val, curr.next.val),
                curr.next
            )
            curr.next = gcd
            curr = gcd.next
        
        return head