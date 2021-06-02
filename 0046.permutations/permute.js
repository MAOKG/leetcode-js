/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const visited = {}
    const results = []
    getPermutes(nums, 0, [], visited, results)
    return results
}

var getPermutes = function(nums, index, curr, visited, results) {
    if (index === nums.length) {
        results.push(curr)
        return
    }
    for (let i = 0; i < nums.length; i++) {
        if (!visited[i]) {
            visited[i] = true
            getPermutes(nums, index + 1, [...curr, nums[i]], visited, results)
            visited[i] = false
        }
    }
}

module.exports = permute
// runtime 63%
// memory 40%
