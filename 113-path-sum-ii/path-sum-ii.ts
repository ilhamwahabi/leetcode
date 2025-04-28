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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    const result = []

    function recursion(curr = root, acc = 0, arr = []) {
        if (curr) {
            const total = acc + curr.val

            if (!curr.left && !curr.right) {
                if (total === targetSum) result.push(arr.concat(curr.val))
            } else {
                recursion(curr.left, total, arr.concat(curr.val))
                recursion(curr.right, total, arr.concat(curr.val))
            }
        }
    }
    recursion()

    return result
};