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
var inorderTraversal = function(root) {
    const arr = []
    if (root) {
        inorder(root, arr)
    }

    return arr
}

/**
 * @param {TreeNode} node
 * @param {number[]} arr
 * @return {void}
 */
var inorder = function(node, arr) {
    if (node.left) {
        inorder(node.left, arr)
    }
    if (node.val) {
        arr.push(node.val)
    }
    if (node.right) {
        inorder(node.right, arr)
    }
}

module.exports = inorderTraversal
// runtime 94%
// memory 70%
