/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root) {
        return null
    }
    if (root.val === p.val || root.val === q.val) {
        return root
    }
    let leftAncestor = lowestCommonAncestor(root.left, p, q)
    let rightAncestor = lowestCommonAncestor(root.right, p, q)

    if (leftAncestor && rightAncestor) {
        return root
    }

    if (leftAncestor) {
        return leftAncestor
    }
    if (rightAncestor) {
        return rightAncestor
    }
    return null
}

module.exports = lowestCommonAncestor
// runtime 75%
// memory 23%
