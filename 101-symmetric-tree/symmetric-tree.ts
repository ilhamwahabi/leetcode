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

function isSymmetric(root: TreeNode | null): boolean {
    let left = ""
    let right = ""
    function recursion(root: TreeNode | null, direction: "left" | "right") {
        if (!root) {
            if (direction === "left") left += "null"
            if (direction === "right") right += "null"
            return
        }

        if (direction === "left") {
            left += root.val
            recursion(root.left, direction)
            recursion(root.right, direction)
        }
        if (direction === "right") {
            right += root.val
            recursion(root.right, direction)
            recursion(root.left, direction)
        }
    }
    recursion(root.left, "left")
    recursion(root.right, "right")

    return left === right
};