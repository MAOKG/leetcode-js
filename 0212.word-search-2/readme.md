[212. Word Search II](https://leetcode.com/problems/word-search-ii/)

Given an m x n board of characters and a list of strings words, return all words on the board.

Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

Example 1:

```
Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
Output: ["eat","oath"]
```

Example 2:

```
Input: board = [["a","b"],["c","d"]], words = ["abcb"]
Output: []
```

**Constraints**:

-   m == board.length
-   n == board[i].length
-   1 <= m, n <= 12
-   board[i][j] is a lowercase English letter.
-   1 <= words.length <= 3 \* 104
-   1 <= words[i].length <= 10
-   words[i] consists of lowercase English letters.
-   All the strings of words are unique.

## Pseudocode

```
FIND-WORDs(board, words)
  trie = new Trie()
  for word in words
    trie.insert(word)
  results = new Set()
  visited = new Array(m, new Array(n, false))
  for i from 0:m
    for j from 0:n
      val = board[i][j]
      if trie.root.contains(val)
        nextNode = trie.root.get(val)
        GET-WORDS(board, i, j, nextNode, visited, results)

  return results
END

GET-WORDS(board, i, j, node, visited, results)
  if node.isEnd
    results.add(node.word)
  visited[i][j] = true

  for direction in directions
    newX = i + direction[0]
    newY = j + direction[1]
    if newX, newY is on board and is not visited
      val = board[newX][newY]
      if node.contains(val)
        nextNode = node.get(val)
        GET-WORDS(board, newX, newY, nextNode, visited, results)
  visited[i][j] = false
END

directions = [[0,1], [1,0], [0, -1], [-1, 0]]
```
