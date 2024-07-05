# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def nodesBetweenCriticalPoints(self, head: Optional[ListNode]) -> List[int]:
        distances = []

        curr = head
        loc = 0
        while curr is not None and curr.next is not None and curr.next.next is not None:
            if (
                (curr.val < curr.next.val and curr.next.val > curr.next.next.val) or
                (curr.val > curr.next.val and curr.next.val < curr.next.next.val)
            ):
                distances.append(loc + 1)
            loc += 1
            curr = curr.next

        if len(distances) <= 1: return [-1, -1] 

        shortest = None
        for i in range(1, len(distances)):
            if shortest == None: shortest = distances[i] - distances[i-1]
            else: shortest = min([shortest, distances[i] - distances[i-1]])
        return [shortest, distances[-1] - distances[0]]