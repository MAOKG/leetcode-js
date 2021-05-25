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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if (!root) {
        return null
    }
    if (root.val === key) {
        if (!root.left && !root.right) {
            return null
        } else if (root.left && root.right) {
            let s = root.right
            while (s.left) {
                s = s.left
            }
            root.val = s.val
            root.right = deleteNode(root.right, s.val)
        } else {
            let child = root.left || root.right
            return child
        }
    } else if (root.val > key) {
        root.left = deleteNode(root.left, key)
    } else {
        root.right = deleteNode(root.right, key)
    }

    return root
}

module.exports = deleteNode
// runtime 42%
// memory 52%
