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

function goodNodes(root: TreeNode | null): number {
    let count = 0

    function traverse(root: TreeNode | null, maxPrev: number) {
        if (root) {
            const max = Math.max(root.val, maxPrev)
            if (max === root.val) count++

            traverse(root.left, max)
            traverse(root.right, max) 
        }
    }
    traverse(root, -Infinity)

    return count
};