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

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
    function recursion(root) {
        if (!root) return

        if (val > root.val) {
            if (root.right) {
                recursion(root.right)
            } else {
                root.right = new TreeNode(val)
            }
        }
        else if (val < root.val) {
            if (root.left) {
                recursion(root.left)
            } else {
                root.left = new TreeNode(val)
            }
        }
    }
    recursion(root)
    
    return root ?? new TreeNode(val)
};