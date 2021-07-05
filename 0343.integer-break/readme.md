[343. Integer Break](https://leetcode.com/problems/integer-break/)

Given an integer n, break it into the sum of k positive integers, where k >= 2, and maximize the product of those integers.

Return the maximum product you can get.

Example 1:

```
Input: n = 2
Output: 1
Explanation: 2 = 1 + 1, 1 × 1 = 1.
```

Example 2:

```
Input: n = 10
Output: 36
Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.
```

**Constraints**:

-   2 <= n <= 58

## Pseudocode

```
INTEGER-BREAK(n)
  memo = new Array(n+1, 0)
  memo[1] = 1
  for i from 2:n
    for j from 1:i-1
      memo[i] = MAX(memo[i], j*(i-j), j*memo[i-j])
  return memo[n]
END
```
