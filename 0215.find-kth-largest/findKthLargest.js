/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const heap = new MinHeap()
    for (let num of nums) {
        if (heap.size() < k) {
            heap.insert(num)
        } else if (num > heap.minimum()) {
            heap.extractMin()
            heap.insert(num)
        }
    }
    return heap.minimum()
}

class MinHeap {
    constructor() {
        this.array = []
    }
    getArray() {
        return this.array
    }
    size() {
        return this.array.length
    }
    getLeftChildIndex(i) {
        return 2 * i + 1
    }
    getRightChildIndex(i) {
        return 2 * i + 2
    }
    getParentIndex(i) {
        return Math.floor((i + 1) / 2 - 1)
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
        if (l < n && a[l] < a[i]) {
            minIndex = l
        }
        if (r < n && a[r] < a[minIndex]) {
            minIndex = r
        }
        if (minIndex !== i) {
            this.swap(i, minIndex)
            this.heapify(minIndex)
        }
    }
    insert(val) {
        this.array.push(val)
        let curr = this.array.length - 1
        while (
            this.hasParent(curr) &&
            this.array[curr] < this.array[this.getParentIndex(curr)]
        ) {
            let parentIndex = this.getParentIndex(curr)
            this.swap(curr, parentIndex)
            curr = parentIndex
        }
    }
    extractMin() {
        const n = this.size()
        if (n > 0) {
            const min = this.minimum()
            this.array[0] = this.array[n - 1]
            this.array.splice(-1, 1)
            this.heapify(0)

            return min
        }
        return null
    }
}

module.exports = findKthLargest
// runtime 46%
// memory 25%
