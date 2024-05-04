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

class BSTIterator {
    stack = [-1]
    current = 0
    
    constructor(root: TreeNode | null) {
        const traverse = (root: TreeNode | null) => {
            if (root) {
                traverse(root.left)
                this.stack.push(root.val)
                traverse(root.right)
            }
        }
        traverse(root)
    }

    next(): number {
        this.current++
        return this.stack[this.current]
    }

    hasNext(): boolean {
        return this.stack[this.current + 1] !== undefined
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */