/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (!root) {
        return true
    }
    let leftHeight = findHeight(root.left)
    let rightHeight = findHeight(root.right)
    if (Math.abs(leftHeight - rightHeight) > 1) {
        return false
    }
    return isBalanced(root.left) && isBalanced(root.right)
}

var findHeight = function(node) {
    if (!node) {
        return 0
    }
    let leftHeight = findHeight(node.left)
    let rightHeight = findHeight(node.right)

    return Math.max(leftHeight, rightHeight) + 1
}

module.exports = isBalanced
// runtime 90%
// memory 52%
