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

function rightSideView(root: TreeNode | null): number[] {
    // Get list of node for each level
    // Return array of the most right element from each level

    const nodes = []
    function recursion(root: TreeNode | null, level = 0) {
        if (root) {
            if (nodes[level] === undefined) nodes[level] = []

            nodes[level].push(root.val)
            recursion(root.left, level + 1)
            recursion(root.right, level + 1)
        }
    }
    recursion(root)

    return nodes.map(node => node.at(-1))
};