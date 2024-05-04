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

function postorder(root: Node | null): number[] {
    const stack = []

    function traverse(root: Node | null) {
        if (root) {
            root.children.forEach(r => traverse(r))
            stack.push(root.val)
        }
    }
    traverse(root)

    return stack
};