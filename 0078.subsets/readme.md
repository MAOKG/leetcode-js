[78. Subsets](https://leetcode.com/problems/subsets/)

Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:

```
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
```

Example 2:

```
Input: nums = [0]
Output: [[],[0]]
```

**Constraints**:

-   1 <= nums.length <= 10
-   -10 <= nums[i] <= 10
-   All the numbers of nums are unique.

## Pseudocode

```
SUBSETS(nums)
  results = new Array()
  curr = new Array()
  results.push([])
  FIND-SUBSETS(nums, 0, curr, results)
  return results
END

FIND-SUBSETS(nums, index, curr, results)
  if index = nums.length
    returns

  for i from index to nums.length-1
    num = nums[i]
    curr.push(num)
    results.push(curr.copy())
    FIND-SUBSETS(nums, i+1, curr, results)
    curr.pop()

END
```
