[63. Unique Paths II](https://leetcode.com/problems/unique-paths-ii/)

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

Now consider if some obstacles are added to the grids. How many unique paths would there be?

An obstacle and space is marked as 1 and 0 respectively in the grid.

Example 1:

```
Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
Output: 2
Explanation: There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right
```

Example 2:

```
Input: obstacleGrid = [[0,1],[0,0]]
Output: 1
```

**Constraints**:

-   m == obstacleGrid.length
-   n == obstacleGrid[i].length
-   1 <= m, n <= 100
-   obstacleGrid[i][j] is 0 or 1.

## Pseudocode

```
UNIQUE-PATHS(grid)
  m = grid.length
  n = grid[0].length
  memo = new Array<Array>(m, new Array<Int>(n, 0))
  if grid[m-1][n-1] is not 1
    memo[m-1][n-1] = 1
  for i from m-1:0
    for j from n-1:0
      if grid[i][j] is not 1
        if i < m-1
          memo[i][j] += memo[i+1][j]
        if j < n-1
          memo[i][j] += memo[i][j+1]
  return memo[0][0]
END
```
