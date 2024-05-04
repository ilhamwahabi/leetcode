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

function binaryTreePaths(root: TreeNode | null): string[] {
    const res = []

    function traverse(root: TreeNode | null, s: string) {
        if (!root.left && !root.right) res.push(s ? `${s}->${root.val}` : `${root.val}`)
        else {
            if (root.left) traverse(root.left, s ? `${s}->${root.val}` : `${root.val}`)
            if (root.right) traverse(root.right, s ? `${s}->${root.val}` : `${root.val}`)
        }
    }
    traverse(root, "")

    return res
};