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

class FindElements {
    set = new Set()

    constructor(root: TreeNode | null) {
        const set = new Set()

        function recursion(root: TreeNode | null) { 
            if (root) {
                if (root.left) {
                    root.left.val = 2 * root.val + 1
                    set.add(root.left.val)
                    recursion(root.left)
                }
                if (root.right) {
                    root.right.val = 2 * root.val + 2
                    set.add(root.right.val)
                    recursion(root.right)
                }
            }
        }

        if (root) {
            root.val = 0
            set.add(0)
        }
        recursion(root)

        this.set = set
    }

    find(target: number): boolean {
        return this.set.has(target)
    }
}

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */