/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number, children?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */

function maxDepth(root: Node | null): number {
    // Iterate depth, return Math.max of val

    function traverse(root: Node | null, level) {
        if (root === null) return 0

        let max = level
        root.children.forEach(c => {
            const res = traverse(c, level + 1)
            if (res > max) max = res
        })        
        return max
    }

    return traverse(root, 1)
};