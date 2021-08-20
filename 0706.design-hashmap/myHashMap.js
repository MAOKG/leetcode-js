const N = 2069

class MyHashMap {
    constructor() {
        this.store = new Array(N).fill(0).map(ele => new Bucket())
    }

    /**
     * value will always be non-negative.
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        const index = key % N
        this.store[index].add(key, value)
    }

    /**
     * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const index = key % N
        return this.store[index].get(key)
    }
    /**
     * Removes the mapping of the specified value key if this map contains a mapping for the key
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const index = key % N
        return this.store[index].remove(key)
    }
}

class Bucket {
    constructor() {
        this.bucket = []
    }
    add(key, value) {
        let exist = false
        for (let i = 0; i < this.bucket.length; i++) {
            if (this.bucket[i].key === key) {
                this.bucket[i].value = value
                exist = true
                break
            }
        }
        if (!exist) {
            this.bucket.push({ key, value })
        }
    }
    remove(key) {
        for (let i = 0; i < this.bucket.length; i++) {
            if (this.bucket[i].key === key) {
                this.bucket.splice(i, 1)
                break
            }
        }
    }
    get(key) {
        for (let i = 0; i < this.bucket.length; i++) {
            if (this.bucket[i].key === key) {
                return this.bucket[i].value
            }
        }

        return -1
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
module.exports = MyHashMap
// runtime 35%
// memory 62%
