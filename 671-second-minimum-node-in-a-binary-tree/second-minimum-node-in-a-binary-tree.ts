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

function findSecondMinimumValue(root: TreeNode | null): number {
    let sm1 = Infinity
    let sm2 = Infinity

    function traverse(root: TreeNode | null) {
        if (!root) return
        
        if (root.val < sm1) {
            sm2 = sm1
            sm1 = root.val
        } else if (root.val < sm2 && root.val > sm1) {
            sm2 = root.val
        }

        traverse(root.left)
        traverse(root.right)
    }
    traverse(root)

    return sm2 === Infinity ? -1 : sm2
};