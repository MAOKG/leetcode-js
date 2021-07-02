[37. Sudoku Solver](https://leetcode.com/problems/sudoku-solver/)

Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

Each of the digits 1-9 must occur exactly once in each row.
Each of the digits 1-9 must occur exactly once in each column.
Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
The '.' character indicates empty cells.

Example 1:

```
Input: board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
Output: [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]
```

**Constraints**:

-   board.length == 9
-   board[i].length == 9
-   board[i][j] is a digit or '.'.
-   It is guaranteed that the input board has only one solution.

## Pseudocode

```
SOLVE(board)
  row = new Array<Array>(9, new Array<bool>(9, false))
  col = new Array<Array>(9, new Array<bool>(9, false))
  box = new Array<Array>(9, new Array<bool>(9, false))
  done = false
  SCAN(board, 0, 0, row, col, box)
  DFS(board, 0, 0, row, col, box, done)
END

DFS(board, i, j, row, col, box, done)
  if i is 9
    done = true
    return
  if done
    return
  boxIndex = GET-BOX-INDEX(i, j)
  newI, newJ = GET-NEXT-POS(i, j)
  if board[i][j] has value
      DFS(board, newI, newJ, row, col, box, done)
    return
  for v from 1:9
    if !row[i][v-1] && !col[j][v-1] && !box[boxIndex][v-1]
      row[i][v-1] = true
      col[j][v-1] = true
      box[boxIndex][v-1] = true
      board[i][j] = v
      DFS(board, newI, newJ, row, col, box, done)
      if done
        return
      row[i][v-1] = false
      col[j][v-1] = false
      box[boxIndex][v-1] = false
      board[i][j] = "."
END

SCAN(board, i, j, row, col, box)
  if i is is 9
    return
  boxIndex = GET-BOX-INDEX(i, j)
  newI, newJ = GET-NEXT-POS(i, j)
  if board[i][j] has value
    val = board[i][j]
    row[i][val-1] = true
    col[j][val-1] = true
    box[boxIndex][val-1] = true
  SCAN(board, newI, newJ, row, col, box)
END

GET-BOX-INDEX(i, j)
  index = Math.Floor(i/3) * 3 + Math.Floor(j/3)
  return index
END

GET-NEXT-POS(i, j)
  newI = i
  newJ = j + 1
  if newJ > 8
    newI = i + 1
    newJ = 0
  return newI, newJ
END
```
