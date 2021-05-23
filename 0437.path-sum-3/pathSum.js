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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    if (!root) {
        return 0
    }
    let count = 0
    count += pathSumInclude(root, targetSum)
    count += pathSum(root.left, targetSum)
    count += pathSum(root.right, targetSum)

    return count
}

var pathSumInclude = function(node, targetSum) {
    if (!node) {
        return 0
    }
    let count = 0
    if (node.val === targetSum) {
        count++
    }
    count += pathSumInclude(node.left, targetSum - node.val)
    count += pathSumInclude(node.right, targetSum - node.val)

    return count
}

module.exports = pathSum
// runtime 45%
// memory 98%
