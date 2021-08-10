class RandomizedSet {
    constructor() {
        this.map = new Map()
    }

    insert(val) {
        if (this.map.has(val)) {
            return false
        }
        this.map.set(val, true)
        return true
    }
    remove(val) {
        if (this.map.has(val)) {
            this.map.delete(val)
            return true
        }
        return false
    }

    getRandom() {
        const keys = [...this.map.keys()]
        if (keys.length === 1) {
            return keys[0]
        }
        const index = Math.floor(Math.random() * keys.length)

        return keys[index]
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
// runtime 23%
// memory 21%
