[200. Number of Islands](https://leetcode.com/problems/number-of-islands/)

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

```
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
```

Example 2:

```
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
```

**Constraints**:

-   m == grid.length
-   n == grid[i].length
-   1 <= m, n <= 300
-   grid[i][j] is '0' or '1'.

## Pseudocode

```
NUM-ISLANDS(grid)
  m = grid.length
  n = grid[0].length
  visited = new Array<Array>()
  counts = 0
  for x from 0:m-1
    for y from 0:n-1
      if !visited[x][y] && grid[x][y] is "1"
        count++
        DFS(grid, visited, x, y)
  return counts
END

DFS(grid, visited, x, y)
  visited[x][y] = true
  for direction in directions
    newX = x + direction[0]
    newY = y + direction[1]

    if newX,newY is on gird && !visited[newX][newY] && grid[newX][newY] is "1"
      DFS(grid, visited, newX, newY)
END

directions = [[0,1], [1,0], [0,-1], [-1,0]]
```
