/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    const n = nums.length
    if (n === 0) {
        return 0
    }
    if (n === 1) {
        return 1
    }
    if (n === 2) {
        if (nums[0] !== nums[1]) {
            return 2
        }
        return 1
    }
    const memoPos = new Array(n).fill(1)
    const memoNeg = new Array(n).fill(1)
    let res = 1
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                memoPos[i] = Math.max(memoPos[i], 1 + memoNeg[j])
            }
            if (nums[i] < nums[j]) {
                memoNeg[i] = Math.max(memoNeg[i], 1 + memoPos[j])
            }
        }
        res = Math.max(res, memoPos[i], memoNeg[i])
    }

    return res
}

module.exports = wiggleMaxLength
// runtime 23%
// memory 10%
