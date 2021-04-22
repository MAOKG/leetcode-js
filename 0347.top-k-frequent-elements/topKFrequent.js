class MinHeap {
    constructor() {
        this.array = []
    }
    compare(a, b) {
        return a - b
    }

    getLeftChildIndex(i) {
        return 2 * i + 1
    }
    getRightChildIndex(i) {
        return 2 * i + 2
    }

    getParentIndex(i) {
        return Math.floor((i + 1) / 2) - 1
    }

    hasParent(i) {
        return this.getParentIndex(i) >= 0
    }

    minimum() {
        if (this.array.length > 0) {
            return this.array[0]
        }
        return null
    }

    getArray() {
        return this.array
    }

    size() {
        return this.array.length
    }

    swap(i, j) {
        let temp = this.array[i]
        this.array[i] = this.array[j]
        this.array[j] = temp
    }

    heapify(i) {
        const a = this.array
        const n = a.length
        let l = this.getLeftChildIndex(i)
        let r = this.getRightChildIndex(i)
        let minIndex = i

        if (l < n && this.compare(a[l], a[i]) < 0) {
            minIndex = l
        }
        if (r < n && this.compare(a[r], a[minIndex]) < 0) {
            minIndex = r
        }
        if (minIndex !== i) {
            this.swap(i, minIndex)
            this.heapify(minIndex)
        }
    }

    insert(ele) {
        this.array.push(ele)
        let curr = this.array.length - 1

        while (
            this.hasParent(curr) &&
            this.compare(
                this.array[curr],
                this.array[this.getParentIndex(curr)]
            ) < 0
        ) {
            let parentIndex = this.getParentIndex(curr)
            this.swap(curr, parentIndex)
            curr = parentIndex
        }
    }

    extractMin() {
        if (this.array.length > 0) {
            const min = this.array[0]
            this.array[0] = this.array[this.array.length - 1]
            this.array.splice(-1, 1)
            this.heapify(0)

            return min
        }

        return null
    }
}

class MinimumPriorityQueue extends MinHeap {
    constructor() {
        super()
        this.priorityMap = {}
        this.compare = this.comparePriority.bind(this)
    }

    comparePriority(a, b) {
        return this.priorityMap[a] - this.priorityMap[b]
    }

    insert(ele, priority = 0) {
        this.priorityMap[ele] = priority
        super.insert(ele)
    }

    extractMin() {
        const ele = super.extractMin()
        if (ele !== null) {
            delete this.priorityMap[ele]
        }
        return ele
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const freqMap = {}
    for (let num of nums) {
        if (freqMap[num]) {
            freqMap[num]++
        } else {
            freqMap[num] = 1
        }
    }

    const pg = new MinimumPriorityQueue()
    for (let num of Object.keys(freqMap)) {
        if (pg.size() < k) {
            pg.insert(Number(num), freqMap[num])
        } else if (freqMap[pg.minimum()] < freqMap[num]) {
            pg.extractMin()
            pg.insert(Number(num), freqMap[num])
        }
    }

    return pg.getArray()
}

module.exports = topKFrequent
// runtime 18%
// memory 24%
