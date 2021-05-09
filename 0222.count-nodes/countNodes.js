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
var countNodes = function(root) {
    if (!root) {
        return 0
    }
    let leftCount = countNodes(root.left)
    let rightCount = countNodes(root.right)
    return leftCount + rightCount + 1
}

module.exports = countNodes
// runtime 85%
// memory 93%
