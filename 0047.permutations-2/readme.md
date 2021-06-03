[47. Permutations II](https://leetcode.com/problems/permutations-ii/)

Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

Example 1:

```
Input: nums = [1,1,2]
Output:
[[1,1,2],
[1,2,1],
[2,1,1]]
```

Example 2:

```
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```

**Constraints**:

-   1 <= nums.length <= 8
-   -10 <= nums[i] <= 10

## Pseudocode

```
PERMUTE(nums)
  counts = new HashMap<int, int>()
  for num in nums
    if counts[num]
      counts[num]++
    else
      counts[num] = 1
  results = new Array<Array>()
  GET-PERMUTES(nums, [], counts, results)

  return results
END

GET-PERMUTES(nums, curr, counts, results)
  if curr.length is nums.length
    results.push(curr)
    return

  for key in counts
    count = counts[key]
    if count > 0
      counts[key] = count - 1
      GET-PERMUTES(nums, [...curr, key], counts, results)
      counts[key] = count
END
```
