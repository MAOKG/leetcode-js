/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const visited = {}
    for (let i = 0; i < nums.length; i++) {
        if (visited.hasOwnProperty(target - nums[i])) {
            return [visited[target - nums[i]], i]
        }
        visited[nums[i]] = i
    }
    return []
}
module.exports = twoSum
// runtime 44ms 99%
// memory 34 MB 87%
