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
    let leftHeight = findLeftHeight(root)
    let rightHeight = findRightHeight(root)

    if (leftHeight === rightHeight) {
        return Math.pow(2, leftHeight) - 1
    }

    return 1 + countNodes(root.left) + countNodes(root.right)
}

var findLeftHeight = function(root) {
    let curr = root
    let level = 0
    while (curr) {
        curr = curr.left
        level++
    }
    return level
}

var findRightHeight = function(root) {
    let curr = root
    let level = 0
    while (curr) {
        curr = curr.right
        level++
    }
    return level
}

module.exports = countNodes
// runtime 8%
// memory 20%
