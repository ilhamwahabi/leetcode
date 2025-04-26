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

function smallestFromLeaf(root: TreeNode | null): string {
    let smallest = ""

    function recursion(root: TreeNode | null, str: string) {
        if (root) {
            const val = String.fromCharCode(root.val + 97) + str

            if (!root.left && !root.right) {
                if (smallest === "" || val.localeCompare(smallest) === -1) {
                    smallest = val
                }
            } else {
                recursion(root.left, val)
                recursion(root.right, val)
            }
        }
    }
    recursion(root, "")

    return smallest
};