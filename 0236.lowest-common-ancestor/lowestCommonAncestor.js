/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let pMap = {}
    let qMap = {}
    processMap(root, p, pMap)
    processMap(root, q, qMap)
    let queue = new Q()
    queue.enqueue(root)

    while (queue.count() > 0) {
        let curr = queue.dequeue()
        let bothInLeft = curr.left && pMap[curr.left.val] && qMap[curr.left.val]
        let bothInRight =
            curr.right && pMap[curr.right.val] && qMap[curr.right.val]
        if (!bothInLeft && !bothInRight) {
            return curr
        }
        if (bothInLeft) {
            queue.enqueue(curr.left)
        } else {
            queue.enqueue(curr.right)
        }
    }
    return null
}

var processMap = function(node, target, map) {
    if (node) {
        processMap(node.left, target, map)
        processMap(node.right, target, map)
        let isInLeft = node.left && map[node.left.val]
        let isInRight = node.right && map[node.right.val]
        let isContain = isInLeft || isInRight || node.val === target.val

        map[node.val] = isContain
    }
}

class Q {
    constructor() {
        this._storage = {}
        this._head = 0
        this._tail = 0
    }
    count() {
        return this._tail - this._head
    }

    enqueue(ele) {
        this._storage[this._tail++] = ele
    }

    dequeue() {
        if (this.count() > 0) {
            let ele = this._storage[this._head]
            delete this._storage[this._head]
            this._head++
            return ele
        }
        return null
    }
}

module.exports = lowestCommonAncestor
// runtime 15%
// memory 6%
