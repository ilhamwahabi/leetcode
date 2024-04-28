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

function getTargetCopy(original: TreeNode | null, cloned: TreeNode | null, target: TreeNode | null): TreeNode | null {
    const traverse = (tree: TreeNode | null) => {
        if (tree === null) return null
        if (tree.val === target.val) return tree

        const left = traverse(tree.left)
        const right = traverse(tree.right)

        if (left === null && right === null) return null
        else if (left === null) return right
        else if (right === null) return left
    }

    return traverse(cloned)
};