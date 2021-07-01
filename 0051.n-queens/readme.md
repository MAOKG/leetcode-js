[51. N-Queens](https://leetcode.com/problems/n-queens/)

The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

Example 1:

```
Input: n = 4
Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
```

Example 2:

```
Input: n = 1
Output: [["Q"]]
```

**Constraints**:

-   1 <= n <= 9

## Pseudocode

```
SOLVE(n)
  boards = new Array<string>()
  curr = new Array<Array>()
  results = new Array<Array>()
  col = new Array<bool>(n, false)
  dia1 = new Array<bool>(2n-1, false)
  dia2 = new Array<bool>(2n-1, false)
  DFS(curr, n, col, dia1, dia2, results)

  for result in results
    board = GET-BOARD(result)
    boards.push(board)

  return boards
END

DFS(curr, n, col, dia1, dia2, results)
  i = curr.length
  if i is n
    results.push(curr.copy())
    return
  for j from 0:n-1
    if !col[j] && !dia1[n-1-(i-j)] && !dia2[i+j]
      col[j] = true
      dia1[n-1-(i-j)] = true
      dia2[i+j] = true
      curr.push([i,j])
      DFS(curr, n, col, dia1, dia2, results)
      curr.pop()
      col[j] = false
      dia1[n-1-(i-j)] = false
      dia2[i+j] = false
END

GET-BOARD(result, n)
  board = new Array<string>(n, String(n, "."))
  for i from 0:result.length-1
    j = result[i][1]
    board[i][j] = "Q"
  return board
END
```
