[127. Word Ladder](https://leetcode.com/problems/word-ladder/)

A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

-   Every adjacent pair of words differs by a single letter.
-   Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
-   sk == endWord

Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

## Examples

Example 1:

```
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
```

Example 2:

```
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
Output: 0
Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.
```

**Constraints**:

-   1 <= beginWord.length <= 10
-   endWord.length == beginWord.length
-   1 <= wordList.length <= 5000
-   wordList[i].length == beginWord.length
-   beginWord, endWord, and wordList[i] consist of lowercase English letters.
-   beginWord != endWord
-   All the words in wordList are unique.

## Pseudocode

```
WORD-LADDER(beginWord, endWord, wordList)
  if wordList.contain(endWord)
    if beginword.length is 1
      return 2
    dictPatternWords = new HashMap<string, array>
    dictWordPatterns = new HashMap<string, array>
    for word in wordList plus beginWord
      dictWordPatterns[word] = []
      for i in 0:len(word)-1
        patten = word replace index i to *
        dictWordPatterns[word].push(pattern)
        if dictPatternWords[pattern]
          dictPatternWords[pattern].push(word)
        else
          dictPatternWords[pattern] = [word]
    visited = hashMap<word, bool>()
    queue = new Queue<WordWithLevel>()
    queue.enqueue(new WordWithLevel(beginWord, 1))
    visited[beginWord] = true
    while queue is not empty
      curr = queue.dequeue()
      patterns = dictWordPatterns[curr.word]
      for pattern in patterns
        neighbours = dictPatternWords[pattern]
        for neighbour in neighbours
          if neighbour is endWord
            return curr.level + 1
          if !visited[neighbour]
            queue.enqueue(new WordWithLevel(neighbour, curr.level+1))
            visited[neighbour] = true
  return 0
END

WordWithLevel(word String, level Int)
```
