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

function findTilt(root: TreeNode | null): number {
    let sum = 0
    
    function recursion(root: TreeNode | null, acc: number) {
        if (!root) {
            return acc
        } else {
            const left = recursion(root.left, acc)
            const right = recursion(root.right, acc)

            const tilt = Math.abs(left - right)
            sum += tilt

            return left + right + root.val
        }
    }
    recursion(root, 0)

    return sum
};