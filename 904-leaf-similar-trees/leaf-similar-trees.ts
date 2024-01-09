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

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    function traverse(root: TreeNode): string {
        if (root === null) return ""

        if (root.left === null && root.right === null) return `${root.val}.`
        else return traverse(root.left) + traverse(root.right)
    }

    return traverse(root1) === traverse(root2)
};