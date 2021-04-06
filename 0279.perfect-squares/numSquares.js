/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const q = new Queue()
    const visited = {}
    q.enqueue(new NodeWithLevel(n, 0))
    visited[n] = true
    while (q.count() > 0) {
        let curr = q.dequeue()
        let i = 1
        while (true) {
            let remain = curr.val - i * i
            if (remain < 0) break
            if (remain === 0) return curr.level + 1
            if (!visited[remain]) {
                q.enqueue(new NodeWithLevel(remain, curr.level + 1))
                visited[remain] = true
            }
            i++
        }
    }
}

var NodeWithLevel = function(val, level) {
    this.val = val
    this.level = level
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

module.exports = numSquares
// runtime 90%
// memory 40%
