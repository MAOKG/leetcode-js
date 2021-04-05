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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) {
        return []
    }
    const result = []
    const q = new Queue()
    q.enqueue(new TreeNodeWithLevel(root, 0))
    while (q.count() > 0) {
        let curr = q.dequeue()
        let currNode = curr.getNode()
        let currLevel = curr.getLevel()
        if (!result[currLevel]) {
            result[currLevel] = []
        }
        result[currLevel].push(currNode.val)
        if (currNode.left) {
            q.enqueue(new TreeNodeWithLevel(currNode.left, currLevel + 1))
        }
        if (currNode.right) {
            q.enqueue(new TreeNodeWithLevel(currNode.right, currLevel + 1))
        }
    }
    for (let i = 0; i < result.length; i++) {
        if (i % 2 === 1) {
            result[i].reverse()
        }
    }
    return result
}

var TreeNodeWithLevel = function(node, level) {
    this._node = node
    this._level = level
}

TreeNodeWithLevel.prototype.getNode = function() {
    return this._node
}

TreeNodeWithLevel.prototype.getLevel = function() {
    return this._level
}

var Queue = function() {
    this._storage = {}
    this._head = 0
    this._tail = 0
}

Queue.prototype.count = function() {
    return this._tail - this._head
}

Queue.prototype.enqueue = function(value) {
    this._storage[this._tail++] = value
}

Queue.prototype.dequeue = function() {
    if (this.count() > 0) {
        const element = this._storage[this._head]
        delete this._storage[this._head]
        this._head++
        return element
    }
    return null
}

module.exports = zigzagLevelOrder
// runtime 17%
// memory 95%
