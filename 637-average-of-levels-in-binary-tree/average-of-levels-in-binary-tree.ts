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

function averageOfLevels(root: TreeNode | null): number[] {
    // 1. traverse each level
    // 2. pass the level through params
    // 3. for each level sum all of them divide by the total

    const result = []
    const map = {}

    function traverse(root: TreeNode | null, level: number) {
        if (root) {
            if (map[level]) {
                map[level].sum += root.val
                map[level].count++
            } else {
                map[level] = { sum: root.val, count: 1 }
            }
            traverse(root.left, level + 1)
            traverse(root.right, level + 1)
        }
    }
    traverse(root, 1)

    for (const level in map) {
        result.push(map[level].sum / map[level].count)
    }

    return result
};