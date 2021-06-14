[90. Subsets II](https://leetcode.com/problems/subsets-ii/)

Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:

```
Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
```

Example 2:

```
Input: nums = [0]
Output: [[],[0]]
```

**Constraints**:

-   1 <= nums.length <= 10
-   -10 <= nums[i] <= 10

## Pseudocode

```
SUBSETS(nums)
  nums.sort()
  countsMap = new HashMap<int, int>()
  for num in nums
    countsMap[num]++
  curr = new Array()
  results = new Array()
  results.push([])
  uniqueNums = unique elements of nums
  FIND-SUBSETS(uniqueNums, 0, curr, countsMap, results)
  return results
END

FIND-SUBSETS(nums, index, curr, countsMap, results)
  if index is nums.length
    return
  for i in index:nums.length-1
    num = nums[i]
    if countsMap[num] > 0
      countsMap[num]--
      curr.push(num)
      results.push(curr.copy())
      FIND-SUBSETS(nums, i, curr, countsMap, results)
      curr.pop()
      countMap[num]++

END
```
