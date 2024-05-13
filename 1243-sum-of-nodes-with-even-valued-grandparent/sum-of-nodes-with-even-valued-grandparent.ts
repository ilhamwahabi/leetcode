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

function sumEvenGrandparent(root: TreeNode | null): number {
    let sum = 0

    function traverse(root: TreeNode | null, level: number, gp: Object) {
        if (root) {
            if (gp[level - 2]) sum += root.val

            const cgp = { ...gp }
            if (root.val % 2 === 0) cgp[level] = true

            if (root.left) traverse(root.left, level + 1, cgp)
            if (root.right) traverse(root.right, level + 1, cgp)
        }
    }
    traverse(root, 1, {})

    return sum
};