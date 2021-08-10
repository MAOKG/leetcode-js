class RandomizedSet {
    constructor() {
        this.map = new Map()
        this.list = []
    }

    insert(val) {
        if (this.map.has(val)) {
            return false
        }
        this.map.set(val, this.list.length)
        this.list.push(val)
        return true
    }
    remove(val) {
        if (this.map.has(val)) {
            const index = this.map.get(val)
            const n = this.list.length
            let temp = this.list[n - 1]
            this.list[n - 1] = this.list[index]
            this.list[index] = temp
            this.list.pop()
            this.map.set(temp, index)
            this.map.delete(val)
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
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

module.exports = RandomizedSet
// runtime 66%
// memory 73%
