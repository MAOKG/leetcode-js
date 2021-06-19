[79. Word Search](https://leetcode.com/problems/word-search/)

Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example 1:

```
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
```

Example 2:

```
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true
```

Example 3:

```
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
```

**Constraints**:

-   m == board.length
-   n = board[i].length
-   1 <= m, n <= 6
-   1 <= word.length <= 15
-   board and word consists of only lowercase and uppercase English letters.

Follow up: Could you use search pruning to make your solution faster with a larger board?

## Pseudocode

```
EXIST(board, word)
  m = board.length
  n = board[0].length
  visited = new Array()
  for i in m
    for j in n
      if board[i][j] = word[0] && CHECK-EXIST(board, i, j, 0, word, visited)
        return true
  return false

END

CHECK-EXIST(board, i, j, index, word, visited)
  if index == word.length-1
    return board[i][j] == word[last]

  visited[i][j] = true

  for directin in directions
    x = i + direction[0]
    y = j + direction[1]
    if x,y is on board && visited[x][y] is false
      if board[x][y] == word[index+1] && CHECK-EXIST(board, x, y, index+1, word, visited)
        return true
  visited[i][j] = false

  return false
END

directions = [[0,1], [1,0], [0,-1], [-1,0]]
```
