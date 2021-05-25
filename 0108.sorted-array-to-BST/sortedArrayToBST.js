const TreeNode = require('../utils/TreeNode')
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (!nums.length) {
        return null
    }
    let rootIndex = Math.ceil((nums.length - 1) / 2)
    let root = new TreeNode(nums[rootIndex])

    if (rootIndex > 0) {
        root.left = sortedArrayToBST(nums.slice(0, rootIndex))
    }
    if (rootIndex + 1 < nums.length) {
        root.right = sortedArrayToBST(nums.slice(rootIndex + 1))
    }

    return root
}

module.exports = sortedArrayToBST
// runtime 56%
// memory 45%
