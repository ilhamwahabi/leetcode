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

function deepestLeavesSum(root: TreeNode | null): number {
    const sum = []

    function traverse(root: TreeNode | null, level: number) {
        if (!root.left && !root.right) {
            sum[level] ? sum[level] += root.val : sum[level] = root.val
        } else {
            if (root.left) traverse(root.left, level + 1)
            if (root.right) traverse(root.right, level + 1)
        }
    }
    traverse(root, 0)

    return sum[sum.length - 1]
};