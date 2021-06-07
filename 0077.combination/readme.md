[77. Combinations](https://leetcode.com/problems/combinations/)

Given two integers n and k, return all possible combinations of k numbers out of the range [1, n].

You may return the answer in any order.

Example 1:

```
Input: n = 4, k = 2
Output:
[
[2,4],
[3,4],
[2,3],
[1,2],
[1,3],
[1,4],
]
```

uj
Example 2:

```
Input: n = 1, k = 1
Output: [[1]]
```

**Constraints**:

-   1 <= n <= 20
-   1 <= k <= n

## Pseudocode

```
COMBINE(n, k)
  start = 1
  results = new Array<Array>()
  curr = []
  FIND-COMB(start, n, k, curr, results)
  return results
END

FIND-COMB(start, n, k, curr, results)
    if curr.length is k
      results.push(curr.copy())
      return

    for i = start:n && n - i + 1 + curr.length >= k
      curr.push(i)
      FIND-COMB(i+1, n, k, curr, results)
      curr.pop()
END
```
