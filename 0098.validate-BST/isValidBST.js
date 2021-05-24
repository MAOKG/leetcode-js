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
var isValidBST = function(root) {
    return isValid(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)
}

var isValid = function(node, min, max) {
    if (!node) {
        return true
    }
    if (node.left && (node.left.val >= node.val || node.left.val <= min)) {
        return false
    }
    if (node.right && (node.right.val <= node.val || node.right.val >= max)) {
        return false
    }
    return (
        isValid(node.left, min, node.val) && isValid(node.right, node.val, max)
    )
}

module.exports = isValidBST
// runtime 87%
// memory 24%
