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
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) {
        return 0
    }
    let leftDepth = minDepth(root.left)
    let rightDepth = minDepth(root.right)
    if (root.left && root.right) {
        return Math.min(leftDepth, rightDepth) + 1
    }
    if (root.left) {
        return leftDepth + 1
    }
    if (root.right) {
        return rightDepth + 1
    }
    return 1
}

module.exports = minDepth
// runtime 72%
// memory 42%
