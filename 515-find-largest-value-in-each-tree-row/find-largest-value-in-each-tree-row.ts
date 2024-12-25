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

function largestValues(root: TreeNode | null): number[] {
    const result = []

    function traverse(root: TreeNode | null, level: number) {
        if (root) {
            if (result[level] === undefined) {
                result[level] = root.val
            } else {
                result[level] = Math.max(result[level], root.val)
            }
            traverse(root.left, level + 1)
            traverse(root.right, level + 1)
        }
    }
    traverse(root, 0)

    return result
};