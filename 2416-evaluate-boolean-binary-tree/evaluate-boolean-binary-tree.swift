/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public var val: Int
 *     public var left: TreeNode?
 *     public var right: TreeNode?
 *     public init() { self.val = 0; self.left = nil; self.right = nil; }
 *     public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil; }
 *     public init(_ val: Int, _ left: TreeNode?, _ right: TreeNode?) {
 *         self.val = val
 *         self.left = left
 *         self.right = right
 *     }
 * }
 */
class Solution {
    func evaluateTree(_ root: TreeNode?) -> Bool {
        // if (root == nil) return
        
        if (root!.val == 0) {return false}
        else if (root!.val == 1) {return true}
        else if (root!.val == 2) {
            return evaluateTree(root!.left) || evaluateTree(root!.right)
        } else if (root!.val == 3) {
            return evaluateTree(root!.left) && evaluateTree(root!.right)
        }

        return false
    }
}