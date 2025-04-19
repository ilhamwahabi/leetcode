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

function delNodes(root: TreeNode | null, to_delete: number[]): Array<TreeNode | null> {
    // Store to delete in set, for faster access later O(1)
    // Traverse tree, if it's to delete value, remove it from parent
    // and store it's child

    // Time: O(n) linear, because we traverse each item in tree
    // Space: O(n) linear, because the input determine how many data that we stored

    const set = new Set(to_delete)
    const result = root && !set.has(root.val) ? [root] : []

    const traverse = (root: TreeNode | null, prev: TreeNode | null, dir: string | null) => {
        if (root) {
            if (set.has(root.val)) {
                if (root.left && !set.has(root.left.val)) result.push(root.left)
                if (root.right && !set.has(root.right.val)) result.push(root.right)
                
                // Remove to_delete value from parent
                if (prev) prev[dir] = null
            }
            traverse(root.left, root, "left")
            traverse(root.right, root, "right")
        }
    }
    traverse(root, null, null)

    return result
};