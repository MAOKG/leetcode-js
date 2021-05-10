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
var sumOfLeftLeaves = function(root) {
    if (!root) {
        return 0
    }
    return findLeftLeavesSum(root, false)
}

var findLeftLeavesSum = function(node, isLeftChild) {
    if (!node) {
        return 0
    }
    if (!node.left && !node.right) {
        return isLeftChild ? node.val : 0
    }
    return (
        findLeftLeavesSum(node.left, true) +
        findLeftLeavesSum(node.right, false)
    )
}

module.exports = sumOfLeftLeaves
// runtime 58%
// memory 96%
