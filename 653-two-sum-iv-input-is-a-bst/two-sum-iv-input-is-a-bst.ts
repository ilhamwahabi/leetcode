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

function findTarget(root: TreeNode | null, k: number): boolean {
    // Traverse each node, pass the value that we already found
    // If we found the value that have sum=k return true

    const res = {}
    let found = false
    function traverse(root: TreeNode | null, map) {
        if (root !== null && !found) {
            const val = root.val

            if (map[k - val]) found = true
            else map[val] = true

            traverse(root.left, map)
            traverse(root.right, map)
        }
    }
    traverse(root, res)

    return found
};