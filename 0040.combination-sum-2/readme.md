[40. Combination Sum II](https://leetcode.com/problems/combination-sum-ii/)

Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.

Example 1:

```
Input: candidates = [10,1,2,7,6,1,5], target = 8
Output:
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
```

Example 2:

```
Input: candidates = [2,5,2,1,2], target = 5
Output:
[
[1,2,2],
[5]
]
```

**Constraints**:

-   1 <= candidates.length <= 100
-   1 <= candidates[i] <= 50
-   1 <= target <= 30

### Pseudocode

```
COMB-SUM(candidates, target)
  candidates.sort()
  counts = new HashMap<int, int>()
  for ele in candidates
    if counts[ele]
      counts[ele]++
    else
      counts[ele] = 1
  results = new Array()
  FIND-COMB(counts, target, [], results)
  return results
END

FIND-COMB(counts, target, curr, results)
  if target is 0
    results.push(curr.copy())
    return
  for key in counts
    if key > target
      return
    if counts[key] > 0 && key >= curr.last
      counts[key]--
      curr.push(key)
      FIND-COMB(counts, target-key, curr, results)
      counts[val]++
      curr.pop()
END
```
