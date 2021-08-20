class Solution {
    constructor(w) {
        this.prefixSums = []
        let prefixSum = 0
        for (let ele of w) {
            prefixSum += ele
            this.prefixSums.push(prefixSum)
        }
        this.totalSum = prefixSum
    }

    pickIndex() {
        const target = Math.random() * this.totalSum
        let l = 0
        let r = this.prefixSums.length - 1
        while (l < r) {
            let mid = Math.floor((l + r) / 2)
            if (target > this.prefixSums[mid]) {
                l = mid + 1
            } else {
                r = mid
            }
        }

        return l
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
module.exports = Solution
// runtime 95%
// memory 75%
