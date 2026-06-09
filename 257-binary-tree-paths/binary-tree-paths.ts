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
    const result = []

    function recursion(root: TreeNode | null, str = "") {
        if (!root) return null

        const join = str + (str === "" ? "" : "->") + root.val
        if (!root.left && !root.right) result.push(join)
        recursion(root.left, join)
        recursion(root.right, join)
    }
    recursion(root)

    return result
};