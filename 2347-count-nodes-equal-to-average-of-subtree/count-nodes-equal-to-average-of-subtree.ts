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

function averageOfSubtree(root: TreeNode | null): number {
    let total = 0
    
    function recursion(root) {
        if (!root.left && !root.right) {
            total++
            return { sum: root.val, count: 1 }
        }
        
        let sum = root.val
        let count = 1
        
        if (root.left) {
            const left = recursion(root.left)
            sum += left.sum
            count += left.count
        }
        if (root.right) {
            const right = recursion(root.right)
            sum += right.sum
            count += right.count
        }

        if (Math.floor(sum / count) === root.val) total++
        return { sum, count }
    }
    recursion(root)

    return total
};