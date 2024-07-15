# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def createBinaryTree(self, descriptions: List[List[int]]) -> Optional[TreeNode]:
        # Iterate descriptions, create map
        # Check if parent and/or child node exist in map, if not create and add it
        # Connect the parent with child, adjust left/right
        # Track the root, if sometime a parent become child then its the root

        # Time: O(n + m) ~ O(n), linear
        # Space: O(n + n) ~ O(n), linear

        nodes = {}
        isRoot = {}

        for description in descriptions:
            parent, child, isLeft = description

            if parent not in nodes:
                nodes[parent] = TreeNode(parent)
            if child not in nodes:
                nodes[child] = TreeNode(child)
            
            if isLeft == 1:
                nodes[parent].left = nodes[child]
            elif isLeft == 0:
                nodes[parent].right = nodes[child]
            
            root = nodes[parent]
            isRoot[child] = False
        
        for key in nodes:
            if key not in isRoot:
                return nodes[key]
        
        return None