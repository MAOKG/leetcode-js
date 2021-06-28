[417. Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/)

There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

Example 1:

```
Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
```

Example 2:

```
Input: heights = [[2,1],[1,2]]
Output: [[0,0],[0,1],[1,0],[1,1]]
```

_Constraints_:

-   m == heights.length
-   n == heights[r].length
-   1 <= m, n <= 200
-   0 <= heights[r][c] <= 10^5

## Pseudocode

```
PACIFIC-ATLANTIC(heights)
  pacificMap = new Array<Array>()
  atlanticMap = new Array<Array>()
  m = heights.length
  n = heights[0].length

  for x in 0:m-1
    DFS(heights, pacificMap, x, 0)
    DFS(heights, atlanticMap, x, n-1)
  for y in 0:n-1
    DFS(heights, pacificMap, 0, y)
    DFS(heights, atlanticMap, m-1, y)

  results = new Array()
  for x in 0:m-1
    for y in 0:n-1
      if pacificMap[x][y] && atlanticMap[x][y]
        results.push([x,y])
  return results
END

DFS(heights, map, x, y)
  map[x][y] = true
  for direction in directions
    newX = x + direction[0]
    newY = y + direction[1]
    if newX,newY are valid && heights[x][y] <= heights[newX][newY] && !map[newX][newY]
      DFS(heights, map, newX, newY)
END

directions = [[0,1],[1,0],[0,-1],[-1,0]]
```
