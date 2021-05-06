/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (p && q) {
        if (p.val !== q.val) {
            return false
        }
        let isSameLeft = isSameTree(p.left, q.left)
        let isSameRight = isSameTree(p.right, q.right)
        return isSameLeft && isSameRight
    }
    if (!p && !q) {
        return true
    }
    return false
}

module.exports = isSameTree
// runtime 95%
// memory 29%
