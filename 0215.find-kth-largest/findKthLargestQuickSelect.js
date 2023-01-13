/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    return selectKthSmallest(nums, 0, nums.length - 1, nums.length - k + 1)
}

/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @param {number} k
 * @return {number}
 */
var selectKthSmallest = function (nums, l, r, k) {
    if (l === r) {
        return nums[l]
    }
    const p = randomizedPartition(nums, l, r)
    const rank = p - l + 1
    if (rank === k) {
        return nums[p]
    } else if (rank > k) {
        return selectKthSmallest(nums, l, p - 1, k)
    } else {
        return selectKthSmallest(nums, p + 1, r, k - rank)
    }
}

/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var randomizedPartition = function (nums, l, r) {
    const i = Math.floor(Math.random() * (r - l + 1)) + l
    swap(nums, i, r)
    return partition(nums, l, r)
}

/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var partition = function (nums, l, r) {
    /**
     * partition the array such that
     * 1. nums[l, i] are all < x,
     * 2. nums[i+1, j] are all >= x.
     * Therefore x should be placed at index i+1 when in sortrd order
     */
    const x = nums[r]
    let i = l - 1
    for (let j = l; j < r; j++) {
        if (nums[j] < x) {
            i++
            swap(nums, i, j)
        }
    }
    swap(nums, i + 1, r) // move pivot to the correct position

    return i + 1
}

/**
 * @param {number[]} nums
 * @param {number} i
 * @param {number} j
 * @return {void}
 */
var swap = function (nums, i, j) {
    const temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}

module.exports = findKthLargest
// time: 98%
// space: 98%
