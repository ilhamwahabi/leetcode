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

function getAllElements(root1: TreeNode | null, root2: TreeNode | null): number[] {
    function traverse(root: TreeNode | null, arr: number[]) {
        if (root) {
            traverse(root.left, arr)
            arr.push(root.val)
            traverse(root.right, arr)
        }
    }

    const a = []
    traverse(root1, a)

    const b = []
    traverse(root2, b)

    const result = []
    let i = 0
    let j = 0
    while (i < a.length || j < b.length) {
        if (a[i] < b[j] || b[j] === undefined) {
            result.push(a[i])
            i++
        } else {
            result.push(b[j])
            j++
        }
    }
    return result
};