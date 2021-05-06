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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) {
        return null
    }
    invertTree(root.left)
    invertTree(root.right)
    let temp = root.left
    root.left = root.right
    root.right = temp

    return root
}

module.exports = invertTree
// runtime 82%
// memory 84%
