class RandomizedCollection {
    constructor() {
        this.map = new Map()
        this.list = []
    }

    insert(val) {
        const indexes = this.map.has(val) ? this.map.get(val) : new Set()
        indexes.add(this.list.length)
        this.map.set(val, indexes)
        this.list.push(val)

        return indexes.size === 1
    }

    remove(val) {
        if (this.map.has(val) && this.map.get(val).size > 0) {
            const n = this.list.length
            const indexes = this.map.get(val)
            const [index] = indexes
            indexes.delete(index)
            const last = this.list[n - 1]
            this.list[index] = last
            this.list.pop()

            const indexes2 = this.map.get(last)
            indexes2.add(index)
            indexes2.delete(n - 1)
            return true
        }

        return false
    }

    getRandom() {
        if (this.list.length === 1) {
            return this.list[0]
        }
        const index = Math.floor(Math.random() * this.list.length)
        return this.list[index]
    }
}

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

module.exports = RandomizedCollection
// runtime 73%
// memory 22%
