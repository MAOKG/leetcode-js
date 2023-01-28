/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, indexDiff, valueDiff) {
    const buckets = new Map()

    for (let i = 0; i < nums.length; i++) {
        const bucketId = getId(nums[i], valueDiff)

        if (buckets.has(bucketId)) {
            return true
        }
        buckets.set(bucketId, nums[i])

        if (
            buckets.has(bucketId + 1) &&
            Math.abs(nums[i] - buckets.get(bucketId + 1)) <= valueDiff
        ) {
            return true
        }

        if (
            buckets.has(bucketId - 1) &&
            Math.abs(nums[i] - buckets.get(bucketId - 1)) <= valueDiff
        ) {
            return true
        }

        if (buckets.size > indexDiff) {
            const deleteId = getId(nums[i - indexDiff], valueDiff)
            buckets.delete(deleteId)
        }
    }

    return false
}

const getId = (num, valueDiff) => {
    return Math.floor(num / (valueDiff + 1))
}

module.exports = containsNearbyAlmostDuplicate
// runtime: 100%
// memory: 20%
