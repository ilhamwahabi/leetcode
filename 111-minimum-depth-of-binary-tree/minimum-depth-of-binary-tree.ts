/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function minDepth(root: TreeNode | null): number {
    // Recursion from root to each leaf
    // If we found leaf, return it's level, at the end we return the min

    function recursion(root: TreeNode | null, level = 1) {
        if (!root) return 0
        if (!root.left && !root.right) return level
        if (!root.left) return recursion(root.right, level + 1)
        if (!root.right) return recursion(root.left, level + 1)

        return Math.min(
            recursion(root.left, level + 1),
            recursion(root.right, level + 1)
        )
    }

    return recursion(root)
};