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

function increasingBST(root: TreeNode | null): TreeNode | null {
    // [5] 3 -> [5 3] 6 -> [6] [3 5], [6 5 3] 2

    const s1 = []
    const s2 = []

    function traverse(root: TreeNode | null) {
        if (root) {
            while (s1[s1.length - 1] > root.val) s2.push(s1.pop())
            s1.push(root.val)
            while (s2.length > 0) s1.push(s2.pop())

            traverse(root.left)
            traverse(root.right)
        }
    }
    traverse(root)

    const tree = new TreeNode(s1[0], null, null)
    let curr = tree
    for (let i = 1; i < s1.length; i++) {
        curr.right = new TreeNode(s1[i], null, null)
        curr = curr.right
    }
    return tree
};