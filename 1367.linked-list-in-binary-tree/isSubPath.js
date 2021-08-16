/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function(head, root) {
    if (isOk(head, root)) {
        return true
    }
    if (root.left && isSubPath(head, root.left)) {
        return true
    }
    if (root.right && isSubPath(head, root.right)) {
        return true
    }
    return false
}

var isOk = function(head, root) {
    if (!head) {
        return true
    }
    if (!root) {
        return false
    }
    if (head.val != root.val) {
        return false
    }
    if (!head.next) {
        return true
    }
    if (root.left && isOk(head.next, root.left)) {
        return true
    }
    if (root.right && isOk(head.next, root.right)) {
        return true
    }

    return false
}

module.exports = isSubPath
// runtime 66%
// memory 37%
