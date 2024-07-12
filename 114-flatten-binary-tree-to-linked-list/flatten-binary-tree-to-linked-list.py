# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def flatten(self, root: Optional[TreeNode]) -> None:
        """
        Do not return anything, modify root in-place instead.
        """

        # Time: O(n + n) ~ O(n), linear
        # Space: O(n), linear

        stack = []

        def store(root: Optional[TreeNode]) -> None:
            if root != None:
                stack.append(root.val)
                store(root.left)
                store(root.right)
        
        store(root)

        def generate(root: Optional[TreeNode], index) -> None:
            if index < len(stack):
                root.val = stack[index]
                root.left = None
                
                if index < len(stack) - 1:
                    root.right = TreeNode()
                    generate(root.right, index + 1)
        
        generate(root, 0)