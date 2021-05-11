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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if (!root) {
        return []
    }
    if (!root.left && !root.right) {
        return [`${root.val}`]
    }
    let childPaths = []
    if (root.left) {
        let leftPaths = binaryTreePaths(root.left)
        childPaths = [...leftPaths]
    }
    if (root.right) {
        let rightPaths = binaryTreePaths(root.right)
        childPaths = [...childPaths, ...rightPaths]
    }
    return childPaths.map(childPath => `${root.val}->${childPath}`)
}

module.exports = binaryTreePaths
// runtime 89%
// memory 94%
