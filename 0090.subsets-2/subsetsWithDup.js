/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a - b)
    const countsMap = {}
    for (let num of nums) {
        if (countsMap[num]) {
            countsMap[num]++
        } else {
            countsMap[num] = 1
        }
    }
    const uniqueNums = [...new Set(nums)]
    const curr = []
    const results = [[]]
    findSubsets(uniqueNums, 0, curr, countsMap, results)
    return results
}

var findSubsets = function(nums, index, curr, countsMap, results) {
    if (index === nums.length) {
        return
    }

    for (let i = index; i < nums.length; i++) {
        let num = nums[i]
        if (countsMap[num] > 0) {
            countsMap[num]--
            curr.push(num)
            results.push([...curr])
            findSubsets(nums, i, curr, countsMap, results)
            curr.pop()
            countsMap[num]++
        }
    }
}

module.exports = subsetsWithDup
// runtime 62%
// memory 71%
