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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const arr = []
    if (root) {
        postorder(root, arr)
    }

    return arr
}
/**
 * @param {TreeNode} node
 * @param {number[]} arr
 * @return {void}
 */
var postorder = function(node, arr) {
    if (node.left) {
        postorder(node.left, arr)
    }
    if (node.right) {
        postorder(node.right, arr)
    }
    if (node.val) {
        arr.push(node.val)
    }
}

module.exports = postorderTraversal
// runtime 53%
// memory 48%
