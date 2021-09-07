class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.map = new Map()
        this.size = 0
        this.capacity = capacity
        this.head = new ListNode()
        this.tail = new ListNode()
        this.head.next = this.tail
        this.tail.prev = this.head
    }
    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.map.has(key)) {
            const node = this.map.get(key)
            this.moveToTail(node)
            return node.val
        }

        return -1
    }
    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.map.has(key)) {
            const node = this.map.get(key)
            node.val = value
            this.moveToTail(node)
        } else {
            if (this.size === this.capacity) {
                this.removeHead()
            }
            this.addTail(key, value)
        }
    }

    removeHead() {
        const headNode = this.head.next
        this.map.delete(headNode.key)
        this.head.next = headNode.next
        headNode.next.prev = this.head
        this.size--
    }

    moveToTail(node) {
        const prev = node.prev
        const next = node.next
        prev.next = next
        next.prev = prev

        let tailPrev = this.tail.prev
        tailPrev.next = node
        node.prev = tailPrev
        node.next = this.tail
        this.tail.prev = node
    }

    addTail(key, val) {
        const newNode = new ListNode(key, val)
        this.map.set(key, newNode)
        const prevNode = this.tail.prev
        prevNode.next = newNode
        newNode.prev = prevNode
        newNode.next = this.tail
        this.tail.prev = newNode
        this.size++
    }
}

class ListNode {
    constructor(key, val, prev = null, next = null) {
        this.key = key
        this.val = val
        this.prev = prev
        this.next = next
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

module.exports = LRUCache
// runtime 68%
// memory 97%
