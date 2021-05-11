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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    if (!root) {
        return []
    }
    if (!root.left && !root.right) {
        if (root.val === targetSum) {
            return [[root.val]]
        }
        return []
    }
    let results = []
    if (root.left) {
        let leftPaths = pathSum(root.left, targetSum - root.val)
        results = leftPaths
    }
    if (root.right) {
        let rightPaths = pathSum(root.right, targetSum - root.val)
        results = [...results, ...rightPaths]
    }
    results.forEach(arr => arr.unshift(root.val))
    return results
}

module.exports = pathSum
// runtime 85%
// memory 63%
