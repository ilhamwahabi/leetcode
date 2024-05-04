/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function preorder(root: Node | null): number[] {
    const stack = []

    function traverse(root: Node | null) {
        if (root) {
            stack.push(root.val)
            root.children.forEach(r => traverse(r))
        }
    }
    traverse(root)

    return stack
};