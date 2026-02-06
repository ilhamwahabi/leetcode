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

function bstFromPreorder(preorder: number[]): TreeNode | null {
    const root = new TreeNode(preorder[0])
    const stack = [root]

    for (let i = 1; i < preorder.length; i++) {
        const num = preorder[i]
        const node = new TreeNode(num)

        if (num < stack.at(-1).val) {
            stack.at(-1).left = node
        } else {
            let prev = null
            while (num > stack.at(-1)?.val) {
                prev = stack.pop()
            }
            prev.right = node
        }

        stack.push(node)
    }

    return root
};