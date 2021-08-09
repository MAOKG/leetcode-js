// /**
//  * Initialize your data structure here.
//  */
// var TimeMap = function() {}

// /**
//  * @param {string} key
//  * @param {string} value
//  * @param {number} timestamp
//  * @return {void}
//  */
// TimeMap.prototype.set = function(key, value, timestamp) {}

// /**
//  * @param {string} key
//  * @param {number} timestamp
//  * @return {string}
//  */
// TimeMap.prototype.get = function(key, timestamp) {}

class TimeMap {
    constructor() {
        this.map = new Map()
    }

    set(key, value, timestamp) {
        if (this.map.has(key)) {
            let arr = this.map.get(key)
            arr.push({ value, timestamp })
            this.map.set(key, arr)
        } else {
            this.map.set(key, [{ value, timestamp }])
        }
    }

    get(key, timestamp) {
        if (this.map.has(key)) {
            let arr = this.map.get(key)
            if (timestamp < arr[0].timestamp) {
                return ''
            }
            if (timestamp >= arr[arr.length - 1].timestamp) {
                return arr[arr.length - 1].value
            }
            return this.search(arr, 0, arr.length - 1, timestamp)
        } else {
            return ''
        }
    }

    search(arr, start, end, timestamp) {
        if (start > end) {
            return ''
        }
        let mid = Math.floor((start + end) / 2)
        if (arr[mid].timestamp === timestamp) {
            return arr[mid].value
        }
        if (arr[mid].timestamp > timestamp) {
            if (mid > 0 && arr[mid - 1].timestamp <= timestamp) {
                return arr[mid - 1].value
            }
            return this.search(arr, start, mid - 1, timestamp)
        }

        if (mid + 1 < arr.length && arr[mid + 1] > timestamp) {
            return arr[mid + 1].value
        }
        return this.search(arr, mid + 1, end, timestamp)
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

module.exports = TimeMap
// runtime 74%
// memory 40%
