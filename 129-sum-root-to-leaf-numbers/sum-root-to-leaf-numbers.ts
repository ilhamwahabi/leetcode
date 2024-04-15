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

function sumNumbers(root: TreeNode | null): number {
    function traverse(root: TreeNode | null, prev = "") {
        if (root.left === null && root.right === null) {
            return prev + String(root.val)
        } else if (root.left !== null && root.right === null) {
            return parseInt(traverse(root.left, prev + String(root.val)))
        } else if (root.left === null && root.right !== null) {
            return parseInt(traverse(root.right, prev + String(root.val)))
        } else {
            return parseInt(traverse(root.left, prev + String(root.val))) +
                parseInt(traverse(root.right, prev + String(root.val)))
        }
    }

    return traverse(root)
};