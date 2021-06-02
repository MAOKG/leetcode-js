[46. Permutations](https://leetcode.com/problems/permutations/)

Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Example 1:

```
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```

Example 2:

```
Input: nums = [0,1]
Output: [[0,1],[1,0]]
```

Example 3:

```
Input: nums = [1]
Output: [[1]]
```

**Constraints**:

-   1 <= nums.length <= 6
-   -10 <= nums[i] <= 10
-   All the integers of nums are unique.

## Pseudocode

```
PERMUTE(nums)
  visited = new HashMap<int, bool>()
  results = []
  GET-PERMUTES(nums, 0, [], visited, results)
  return results
END

GET-PERMUTES(nums, index, curr, visited, results)
  if index is nums.length
    results.push(curr)
    return
  for i in 0:nums.length-1
    if !visited[i]
      visited[i] = true
      GET-PERMUTES(nums, index+1, [...curr, nums[i]], visited, results)
      visited[i] = false
END
```
