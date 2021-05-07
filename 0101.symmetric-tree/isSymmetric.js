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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    let invertedLeft = invertTree(root.left)
    return isSameTree(invertedLeft, root.right)
}

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

var isSameTree = function(a, b) {
    if (a && b) {
        if (a.val !== b.val) {
            return false
        }
        let isSameLeft = isSameTree(a.left, b.left)
        let isSameRight = isSameTree(a.right, b.right)
        return isSameLeft && isSameRight
    }
    if (!a && !b) {
        return true
    }

    return false
}

module.exports = isSymmetric
// runtime 78%
// memory 66%
