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
var preorderTraversal = function(root) {
    const arr = []
    if (root) {
        preorder(root, arr)
    }

    return arr
}

/**
 * @param {TreeNode} node
 * @param {number[]} arr
 * @return {void}
 */
var preorder = function(node, arr) {
    if (node.val) {
        arr.push(node.val)
    }
    if (node.left) {
        preorder(node.left, arr)
    }
    if (node.right) {
        preorder(node.right, arr)
    }
}

module.exports = preorderTraversal
// runtime 92%
// memory 23%
