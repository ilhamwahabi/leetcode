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

function levelOrder(root: TreeNode | null): number[][] {
    const levels = []

    function recursion(root: TreeNode | null, level = 0) {
        if (!root) return

        if (!levels[level]) levels[level] = []
        levels[level].push(root.val)

        recursion(root.left, level + 1)
        recursion(root.right, level + 1)
    }
    recursion(root)

    return levels
};