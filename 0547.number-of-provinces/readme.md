[547. Number of Provinces](https://leetcode.com/problems/number-of-provinces/)

There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

A province is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

Return the total number of provinces.

Example 1:

```
Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
Output: 2
```

Example 2:

```
Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
Output: 3
```

**Constraints**:

-   1 <= n <= 200
-   n == isConnected.length
-   n == isConnected[i].length
-   isConnected[i][j] is 1 or 0.
-   isConnected[i][i] == 1
-   isConnected[i][j] == isConnected[j][i]

## Pseudocode

```
FIND-CIRCLE-NUM(isConnected)
  n = isConncted.length
  visited = new Array(n, false)
  count = 0
  for i from 0:n-1
    if !visited[i]
      count++
      DFS(isConnected, visited, i)

  return count
END

DFS(isConnected, visited, i)
  n = isConncted.length
  visited[i] = true
  for j from 0:n-1
    if !visited[j] && isConnected[i][j]
      DFS(isConnected, visited, j)
END
```
