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

function sumOfLeftLeaves(root: TreeNode | null): number {
    function traverse(root: TreeNode | null, isLeft): number {
        if (root === null) return 0
        if (root.left === null && root.right === null && isLeft) return root.val
        return traverse(root.left, true) + traverse(root.right, false)
    }

    return traverse(root, false)
};