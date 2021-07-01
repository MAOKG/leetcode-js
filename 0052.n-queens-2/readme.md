[52. N-Queens II](https://leetcode.com/problems/n-queens-ii/)

The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

Given an integer n, return the number of distinct solutions to the n-queens puzzle.

Example 1:

```
Input: n = 4
Output: 2
Explanation: There are two distinct solutions to the 4-queens puzzle as shown.
```

Example 2:

```
Input: n = 1
Output: 1
```

**Constraints**:

-   1 <= n <= 9

## Pseudocode

```
SOLVE(n)
  count = 0
  col = new Array<bool>(n, false)
  dia1 = new Array<bool>(2n-1, false)
  dia2 = new Array<bool>(2n-1, false)
  DFS(0, n, col, dia1, dia2, count)
  return count
END

DFS(i, n, col, dia1, dia2, count)
  if i is n
    count++
    return
  for j from 0:n-1
    if !col[j] && !dia1[n-1-(i-j)] && !dia2[i+j]
      col[j] = true
      dia1[n-1-(i-j)] = true
      dia2[i+j] = true
      DFS(i+1, n, col, dia1, dia2, count)
      col[j] = false
      dia1[n-1-(i-j)] = false
      dia2[i+j] = false
END
```
