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
    const stack = []

    if (root) {
        stack.push({ action: 'visit', node: root })
        while (stack.length > 0) {
            let curr = stack.pop()
            if (curr.action === 'push') {
                arr.push(curr.node.val)
            } else {
                stack.push({ action: 'push', node: curr.node })
                if (curr.node.right) {
                    stack.push({ action: 'visit', node: curr.node.right })
                }
                if (curr.node.left) {
                    stack.push({ action: 'visit', node: curr.node.left })
                }
            }
        }
    }

    return arr
}

module.exports = postorderTraversal
// runtime 20%
// memory 70%
