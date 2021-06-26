[130. Surrounded Regions](https://leetcode.com/problems/surrounded-regions/)

Given an m x n matrix board containing 'X' and 'O', capture all regions surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

Example 1:

```
Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
Explanation: Surrounded regions should not be on the border, which means that any 'O' on the border of the board are not flipped to 'X'. Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'. Two cells are connected if they are adjacent cells connected horizontally or vertically.
```

Example 2:

```
Input: board = [["X"]]
Output: [["X"]]
```

**Constraints**:

-   m == board.length
-   n == board[i].length
-   1 <= m, n <= 200
-   board[i][j] is 'X' or 'O'.

## Pseudocode

```
SOLVE(board)
  m = board.length
  n = board[1].length
  onBorder = new Array<Array>()

  for x in 0:m-1
    for y in 0:n-1
      if (x is 0 or m-1 or y is 0 or n-1) && board[x][y] is "O"
        PROCESS(board, onBorder, x, y)
  for x in 0:m-1
    for y in 0:n-1
      if !onBorder[x][y] && board[x][y] is "O"
        board[x][y] = "X"
END

PROCESS(board, onBorder, x, y)
  onBorder[x][y] = true

  for direction in directions
    newX = x + direction[0]
    newY = y + direction[1]
    if newX,newY within board && board[newX][newY] is "O" && !onBorder[newX][newY]
      PROCESS(board, onBorder, newX, newY)
END

directions = [[0,1],[1,0],[0,-1],[-1,0]]
```
