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

function sumRootToLeaf(root: TreeNode | null): number {
    // Traverse from root, pass the value
    // On the leaf accumulate the value with parseInt(x, 2)
    
    function traverse(root: TreeNode | null, bin: string) {
        if (!root.left && !root.right) return parseInt(bin + root.val, 2)
        if (!root.left) return traverse(root.right, bin + root.val)
        if (!root.right) return traverse(root.left, bin + root.val)
        return traverse(root.left, bin + root.val) + traverse(root.right, bin + root.val)
    }

    return traverse(root, "")
};