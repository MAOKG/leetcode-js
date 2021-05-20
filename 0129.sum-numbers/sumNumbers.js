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
var sumNumbers = function(root) {
    const result = { totalSum: 0 }
    if (root) {
        addSum(root, 0, result)
    }
    return result.totalSum
}

var addSum = function(node, currSum, result) {
    let sum = currSum * 10 + node.val
    if (!node.left && !node.right) {
        result.totalSum += sum
    }
    if (node.left) {
        addSum(node.left, sum, result)
    }
    if (node.right) {
        addSum(node.right, sum, result)
    }
}

module.exports = sumNumbers
// runtime 65%
// memory 30%
