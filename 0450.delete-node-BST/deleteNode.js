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
    let curr = root
    let parent = null
    while (curr && curr.val != key) {
        parent = curr
        if (curr.val > key) {
            curr = curr.left
        } else {
            curr = curr.right
        }
    }
    if (!curr) {
        return root
    }
    let isLeftChild = parent && parent.left && parent.left.val === key
    if (!curr.left && !curr.right) {
        if (!parent) {
            return null
        }
        if (isLeftChild) {
            parent.left = null
        } else {
            parent.right = null
        }
    } else if (curr.left && curr.right) {
        let sParent = curr
        let s = curr.right
        let isLeftSubTree = false
        while (s.left) {
            isLeftSubTree = true
            sParent = s
            s = s.left
        }
        curr.val = s.val
        if (isLeftSubTree) {
            sParent.left = s.right
        } else {
            sParent.right = s.right
        }
    } else {
        let child = curr.left || curr.right
        if (!parent) {
            return child
        }
        if (isLeftChild) {
            parent.left = child
        } else {
            parent.right = child
        }
    }

    return root
}

module.exports = deleteNode
// runtime 67%
// memory 37%
